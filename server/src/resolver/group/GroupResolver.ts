import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from '@/types'
import { Group } from '@/entity'
import {
  addUserToGroup,
  AddUserToGroupInput,
  createGroup,
  CreateGroupInput,
  leaveGroup,
  LeaveGroupInput,
  readGroup,
  ReadGroupInput,
  removeUserFromGroup,
  RemoveUserFromGroupInput,
  updateGroup,
  UpdateGroupInput
} from './mutations'

@Resolver(() => Group)
export class GroupResolver {
  // --- Mutations --- //
  @Authorized()
  @Mutation(() => Group)
  async createGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => CreateGroupInput) input: CreateGroupInput
  ): Promise<Group> {
    return createGroup(ctx, input)
  }

  @Authorized()
  @Mutation(() => Group)
  async updateGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => UpdateGroupInput) input: UpdateGroupInput
  ): Promise<Group> {
    return updateGroup(ctx, input)
  }

  @Authorized()
  @Mutation(() => Boolean)
  async leaveGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => LeaveGroupInput) input: LeaveGroupInput
  ): Promise<boolean> {
    return leaveGroup(ctx, input)
  }

  @Authorized()
  @Mutation(() => Group)
  async readGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => ReadGroupInput) input: ReadGroupInput
  ): Promise<Group> {
    return readGroup(ctx, input)
  }

  @Authorized()
  @Mutation(() => Group)
  async removeUserFromGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => RemoveUserFromGroupInput)
    input: RemoveUserFromGroupInput
  ): Promise<Group> {
    return removeUserFromGroup(ctx, input)
  }

  @Authorized()
  @Mutation(() => Group)
  async addUserToGroup(
    @Ctx() ctx: Context,
    @Arg('input', () => AddUserToGroupInput) input: AddUserToGroupInput
  ): Promise<Group> {
    return addUserToGroup(ctx, input)
  }
}
