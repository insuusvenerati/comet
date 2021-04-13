import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class MessageDeletedResponse {
  @Field(() => ID)
  messageId: string

  @Field(() => ID, { nullable: true })
  userId?: string

  @Field(() => ID, { nullable: true })
  groupId?: string

  @Field(() => ID, { nullable: true })
  channelId?: string
}
