import { Field, ID, InputType } from 'type-graphql'
import { Context } from '@/types'
import { Relationship, User } from '@/entity'

@InputType()
export class ReadDmInput {
  @Field(() => ID)
  userId: string
}

export async function readDm(
  { em, userId: currentUserId, liveQueryStore }: Context,
  { userId }: ReadDmInput
): Promise<User> {
  const user = await em.findOneOrFail(User, currentUserId)
  const [myData] = await user.getFriendData(em, userId)
  myData.unreadCount = 0
  myData.lastViewAt = new Date()
  await em.persistAndFlush(myData)
  liveQueryStore.invalidate(`User:${userId}`)
  return myData.user
}
