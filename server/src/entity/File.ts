import { Field, ObjectType } from 'type-graphql'
import { Embeddable, Property } from '@mikro-orm/core'

@Embeddable()
@ObjectType()
export class File {
  @Property({ columnType: 'text' })
  @Field(() => String)
  url: string

  @Property({ columnType: 'text' })
  @Field(() => String)
  mime: string

  @Property({ columnType: 'text' })
  @Field(() => String)
  filename: string

  @Property()
  @Field(() => Number)
  size: number
}
