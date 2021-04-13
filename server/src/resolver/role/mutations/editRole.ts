import { Role, ServerPermission } from '@/entity'
import { ArgsType, Field, ID, Publisher } from 'type-graphql'
import { Context } from '@/types'
import { IsHexColor, IsOptional, Length } from 'class-validator'
import { ServerRolePayload } from '@/resolver/role/subscriptions'

@ArgsType()
export class EditRoleArgs {
  @Field(() => ID)
  roleId: string

  @Field()
  @Length(1, 100)
  name: string

  @Field({ nullable: true })
  @IsOptional()
  @IsHexColor()
  color?: string

  @Field(() => [ServerPermission])
  permissions: ServerPermission[]
}

export async function editRole(
  { em, user }: Context,
  { roleId, name, color, permissions }: EditRoleArgs,
  notifyRoleUpdated: Publisher<ServerRolePayload>
): Promise<Role> {
  const role = await em.findOneOrFail(Role, roleId, ['server', 'channelRoles'])
  await user.checkServerPermission(
    em,
    role.server.id,
    ServerPermission.ManageRoles
  )
  em.assign(role, { name, color, permissions })
  await em.persistAndFlush(role)
  await notifyRoleUpdated({ serverId: role.server.id, roleId })
  return role
}
