import { Context } from '@/types'
import { Field, ID, InputType, Publisher } from 'type-graphql'
import {
  Channel,
  ChannelPermission,
  File,
  Group,
  GroupUser,
  Image,
  Message,
  RelationshipStatus,
  ServerPermission,
  ServerUser,
  User
} from '@/entity'
import { FileUpload, GraphQLUpload } from 'graphql-upload'
import { uploadFileOrImage } from '@/util'
import { getLinkMetas } from '@/util/getLinkMetas'
import {
  ChangePayload,
  ChangeType,
  TypingPayload
} from '@/resolver/subscriptions'

@InputType()
export class CreateMessageInput {
  @Field({ nullable: true })
  text?: string

  @Field(() => GraphQLUpload, { nullable: true })
  file?: FileUpload

  @Field(() => ID, { nullable: true })
  channelId?: string

  @Field(() => ID, { nullable: true })
  groupId?: string

  @Field(() => ID, { nullable: true })
  userId?: string
}

export async function createMessage(
  { em, userId: currentUserId, liveQueryStore }: Context,
  { text, file, userId, groupId, channelId }: CreateMessageInput,
  notifyMessageChanged: Publisher<ChangePayload>,
  notifyTypingUpdated: Publisher<TypingPayload>
): Promise<Message> {
  if (!text && !file) throw new Error('Must provide text and/or file')

  const channel = channelId
    ? await em.findOneOrFail(Channel, channelId, ['server'])
    : null
  const group = groupId ? await em.findOneOrFail(Group, groupId) : null
  const toUser = userId ? await em.findOneOrFail(User, userId) : null
  const user = await em.findOneOrFail(User, currentUserId)
  const serverUser = channel
    ? await em.findOneOrFail(ServerUser, { user, server: channel.server })
    : null

  if (channel)
    await user.checkChannelPermission(
      em,
      channelId,
      ChannelPermission.SendMessages
    )

  if (group) await user.checkInGroup(em, groupId)

  if (toUser) {
    const [myData] = await user.getFriendData(em, userId)
    if (myData.status === RelationshipStatus.Blocked)
      throw new Error('That user is blocking you')
    if (myData.status === RelationshipStatus.Blocking)
      throw new Error('You are blocking that user')
  }

  let upload: File | Image | null = null
  if (file) {
    upload = await uploadFileOrImage(file)
  }

  let mentionIds = []
  let isEveryoneMentioned = false
  if (text) {
    const mentionRegex = /data-mention="<@(\d+)>"/gi
    mentionIds = [...text.matchAll(mentionRegex)].flatMap(match => match[1])

    const everyoneRegex = /data-mention="<@everyone>"/gi
    isEveryoneMentioned = everyoneRegex.test(text)
  }

  const message = em.create(Message, {
    text,
    channel,
    group,
    toUser,
    author: user,
    serverUser,
    image: upload && (upload as Image).originalUrl ? upload : null,
    file: upload && (upload as File).url ? upload : null,
    mentionedUsers: mentionIds,
    isEveryoneMentioned
  })

  if (text) message.linkMetadatas = await getLinkMetas(text)
  await em.persistAndFlush(message)

  if (toUser) {
    const [myData, theirData] = await user.getFriendData(em, userId)
    myData.showChat = true
    myData.lastMessageAt = new Date()
    theirData.showChat = true
    theirData.lastMessageAt = new Date()
    theirData.unreadCount++
    await em.persistAndFlush([myData, theirData])
    liveQueryStore.invalidate([`User:${user.id}`, `User:${toUser.id}`])
  }

  if (group) {
    group.lastMessageAt = new Date()
    const groupUsers = await em.find(GroupUser, {
      group,
      user: { $ne: user }
    })
    groupUsers.forEach(gu => gu.unreadCount++)
    await em.persistAndFlush(groupUsers)
  }

  if (channel) {
    channel.lastMessageAt = new Date()
    await em.persistAndFlush(channel)
  }

  await notifyMessageChanged({
    id: message.id,
    type: ChangeType.Added
  })

  await notifyTypingUpdated({
    typingUserId: currentUserId,
    userId,
    groupId,
    channelId,
    isTyping: false
  })

  return message
}
