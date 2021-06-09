import { Message, User } from '@/entity'
import { BaseEntity } from '@/entity/BaseEntity'
import { Field, Int, ObjectType } from 'type-graphql'
import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
  QueryOrder
} from '@mikro-orm/core'
import { GraphQLNonNegativeInt } from 'graphql-scalars'

@ObjectType({ implements: BaseEntity })
@Entity()
export class Group extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User)
  owner: User

  @Field(() => String)
  @Property({ columnType: 'text' })
  name: string

  @Field(() => String, { nullable: true })
  @Property({ nullable: true, columnType: 'text' })
  avatarUrl?: string

  @Field(() => Date)
  @Property()
  lastMessageAt: Date = new Date()

  @Field(() => [User])
  @ManyToMany(() => User, 'groups', {
    owner: true,
    orderBy: { username: QueryOrder.ASC }
  })
  users = new Collection<User>(this)

  @OneToMany(() => Message, 'group')
  messages = new Collection<Message>(this)

  @Field(() => String)
  get displayName(): string {
    if (this.name) return this.name
    if (this.users.isInitialized())
      return this.users
        .getItems()
        .map(u => u.username)
        .join(', ')
    return this.id
  }

  @Field(() => GraphQLNonNegativeInt)
  unreadCount: number = 0
}
