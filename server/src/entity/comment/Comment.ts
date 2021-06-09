import { Field, Int, ObjectType } from 'type-graphql'
import {
  LinkMetadata,
  Post,
  ServerUser,
  User,
  CommentVote,
  VoteType
} from '@/entity'
import {
  Collection,
  Embedded,
  Entity,
  ManyToOne,
  OneToMany,
  Property
} from '@mikro-orm/core'
import { BaseEntity } from '@/entity/BaseEntity'

@ObjectType({ implements: BaseEntity })
@Entity()
export class Comment extends BaseEntity {
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User)
  author?: User

  @Field(() => ServerUser, { nullable: true })
  serverUser?: ServerUser

  @Field(() => Post)
  @ManyToOne(() => Post)
  post: Post

  @Field(() => String)
  @Property({ columnType: 'text' })
  text: string

  @Field(() => Comment, { nullable: true })
  @ManyToOne({ entity: () => Comment, nullable: true })
  parentComment?: Comment

  @Field(() => Int)
  @Property()
  voteCount: number = 0

  @Field(() => VoteType)
  voteType: VoteType = VoteType.None

  @OneToMany(() => CommentVote, 'comment')
  votes = new Collection<CommentVote>(this)

  @Field(() => Boolean)
  @Property()
  isPinned: boolean = false

  @Field(() => Date, { nullable: true })
  @Property({ nullable: true })
  pinnedAt?: Date

  @Field(() => Date, { nullable: true })
  @Property({ nullable: true })
  updatedAt?: Date

  @Field(() => Boolean)
  @Property()
  isDeleted: boolean = false

  @Field(() => [LinkMetadata])
  @Embedded(() => LinkMetadata, { object: true, array: true })
  linkMetadatas: LinkMetadata[] = []
}
