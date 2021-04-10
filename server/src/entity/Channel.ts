import { Field, Int, ObjectType } from 'type-graphql'
import { BaseEntity, Message, Server } from '@/entity'
import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property
} from '@mikro-orm/core'
import { ReorderUtils } from '@/util/ReorderUtils'

@ObjectType({ implements: BaseEntity })
@Entity()
export class Channel extends BaseEntity {
  @Field({ nullable: true })
  @Property({ nullable: true, columnType: 'text' })
  name: string

  @Field({ nullable: true })
  @Property({ nullable: true, columnType: 'text' })
  description?: string

  @OneToMany(() => Message, 'channel')
  messages = new Collection<Message>(this)

  @Field(() => Server)
  @ManyToOne({ entity: () => Server, inversedBy: 'channels' })
  server: Server

  @Property({ columnType: 'text' })
  position: string = ReorderUtils.FIRST_POSITION

  @Property()
  isPrivate: boolean = false

  @Property()
  lastMessageAt: Date = new Date()

  @Field()
  isUnread: boolean = false

  @Field(() => Int)
  mentionCount: number = 0
}
