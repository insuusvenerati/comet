import { Arg, Args, Authorized, Ctx, ID, Query, Resolver } from 'type-graphql'
import { Channel, Server, ServerUserJoin, User } from '@/entity'
import {
  ChannelUsersResponse,
  GetPublicServersArgs,
  GetPublicServersResponse,
  GetPublicServersSort
} from '@/resolver/server'
import { QueryOrder } from '@mikro-orm/core'
import { Context } from '@/types'
import { ServerPermission } from '@/types/ServerPermission'
import { ChannelPermission } from '@/types/ChannelPermission'
import { CheckChannelPermission } from '@/util'
import { CheckJoinedServer } from '@/util/auth/middlewares/CheckJoinedServer'

@Resolver(() => Server)
export class ServerQueries {
  @Authorized()
  @Query(() => GetPublicServersResponse)
  async getPublicServers(
    @Args()
    { sort, category, page, pageSize }: GetPublicServersArgs,
    @Ctx() { user, em }: Context
  ): Promise<GetPublicServersResponse> {
    let where = {}
    let orderBy = {}

    if (sort === GetPublicServersSort.Featured) {
      where = { featured: true }
      orderBy = { featuredPosition: QueryOrder.ASC }
    } else if (category) {
      where = { category: category }
      orderBy = { name: QueryOrder.ASC }
    }

    if (sort === GetPublicServersSort.New) {
      orderBy = { createdAt: QueryOrder.DESC }
    } else if (sort === GetPublicServersSort.Top) {
      orderBy = { userCount: QueryOrder.DESC }
    } else if (sort === GetPublicServersSort.AZ) {
      orderBy = { name: QueryOrder.ASC }
    }

    const servers = await em.find(
      Server,
      where,
      [],
      orderBy,
      pageSize,
      page * pageSize
    )

    return {
      servers,
      page,
      nextPage: page >= 0 && servers.length >= pageSize ? page + 1 : null
    } as GetPublicServersResponse
  }

  @Authorized()
  @Query(() => [Server])
  async getJoinedServers(@Ctx() { user, em }: Context): Promise<Server[]> {
    await em.populate(user, ['serverJoins.server'])
    const joins = user.serverJoins
    return joins.getItems().map(join => join.server)
  }

  @CheckChannelPermission(ChannelPermission.ViewChannel)
  @Query(() => [ChannelUsersResponse])
  async getChannelUsers(
    @Ctx() { em }: Context,
    @Arg('channelId', () => ID) channelId: string
  ): Promise<ChannelUsersResponse[]> {
    const channel = await em.findOneOrFail(Channel, channelId, ['server.roles'])
    const joins = await em.find(ServerUserJoin, { server: channel.server }, [
      'user',
      'roles'
    ])

    const result = []

    const compareFn = (a: User, b: User) => a.username.localeCompare(b.username)

    for (const role of channel.server.roles
      .getItems()
      .filter(role =>
        role.permissions.includes(ServerPermission.DisplayRoleSeparately)
      )) {
      const roleUsers = joins
        .filter(join => join.roles.getItems()[0] === role)
        .map(join => join.user)
        .sort(compareFn)
      if (roleUsers.length > 0) {
        result.push({
          role: role.name,
          users: roleUsers
        } as ChannelUsersResponse)
      }
    }

    const onlineUsers = joins
      .filter(
        join =>
          join.user.isOnline &&
          join.roles
            .getItems()
            .filter(role =>
              role.permissions.includes(ServerPermission.DisplayRoleSeparately)
            ).length === 0
      )
      .map(join => join.user)
      .sort(compareFn)

    if (onlineUsers.length > 0) {
      result.push({
        role: 'Online',
        users: onlineUsers
      } as ChannelUsersResponse)
    }

    const offlineUsers = joins
      .filter(join => !join.user.isOnline)
      .map(join => join.user)
      .sort(compareFn)

    if (offlineUsers.length > 0) {
      result.push({
        role: 'Offline',
        users: offlineUsers
      } as ChannelUsersResponse)
    }

    return result
  }

  @CheckJoinedServer()
  @Query(() => [ServerPermission])
  async getServerPermissions(
    @Ctx() { user, em }: Context,
    @Arg('serverId', () => ID) serverId: string
  ): Promise<ServerPermission[]> {
    const server = await em.findOneOrFail(Server, serverId, ['owner'])
    if (user.isAdmin || server.owner === user) {
      return [...new Set<ServerPermission>(Object.values(ServerPermission))]
    }
    const perms = new Set<ServerPermission>()
    const join = await em.findOneOrFail(ServerUserJoin, { user, server }, [
      'roles'
    ])
    const userRoles = join.roles.getItems()
    userRoles.forEach(role => role.permissions.forEach(perm => perms.add(perm)))
    return [...perms]
  }
}
