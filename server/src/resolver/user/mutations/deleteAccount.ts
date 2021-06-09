import { Context } from '@/types'
import { ServerUser, ServerUserStatus, User } from '@/entity'
import { Field, InputType } from 'type-graphql'
import * as argon2 from 'argon2'
import { logger } from '@/util'

@InputType()
export class DeleteAccountInput {
  @Field(() => String)
  password: string
}

export async function deleteAccount(
  { em, userId }: Context,
  { password }: DeleteAccountInput
): Promise<boolean> {
  logger('deleteAccount')
  const user = await em.findOneOrFail(User, userId)
  const match = await argon2.verify(user.passwordHash, password)
  if (!match) throw new Error('error.login.wrongPassword')
  user.isDeleted = true
  await em.persistAndFlush(user)
  await em
    .createQueryBuilder(ServerUser)
    .where({ user, status: ServerUserStatus.Joined })
    .update({ status: ServerUserStatus.None })
    .execute()
  return true
}
