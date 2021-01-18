import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  ID,
  Mutation,
  Query,
  Resolver,
  Root
} from 'type-graphql'
import { CreatePlanetArgs } from '@/planet/CreatePlanetArgs'
import { Planet } from '@/planet/Planet.Entity'
import { Context } from '@/Context'
import { User } from '@/user/User.Entity'
import { bannedWords } from '@/BannedWords'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import { PlanetsArgs } from '@/planet/PlanetsArgs'
import { PlanetSort } from '@/planet/PlanetSort'
import { handleUnderscore } from '@/handleUnderscore'
import { randomEnum } from '@/randomEnum'
import { Color } from '@/Color'
import { ChatChannel } from '@/chat/ChatChannel.Entity'
import { PlanetsResponse } from '@/planet/PlanetsResponse'

@Resolver(() => Planet)
export class PlanetResolver {
  @InjectRepository(Planet) readonly planetRepo: Repository<Planet>
  @InjectRepository(ChatChannel) readonly channelRepo: Repository<ChatChannel>
  @InjectRepository(User) readonly userRepo: Repository<User>

  @Authorized()
  @Mutation(() => Boolean)
  async createPlanet(
    @Args() { name, description, galaxies, nsfw }: CreatePlanetArgs,
    @Ctx() { userId }: Context
  ) {
    bannedWords.forEach(u => {
      if (name.toLowerCase().includes(u.toLowerCase())) {
        throw new Error('Inappropriate Planet Name')
      }
    })

    const foundPlanet = await this.planetRepo
      .createQueryBuilder('planet')
      .where('planet.name ILIKE :name', { name: handleUnderscore(name) })
      .getOne()

    if (foundPlanet) throw new Error('Planet already exists')

    const user = await this.userRepo
      .createQueryBuilder('user')
      .whereInIds(userId)
      .leftJoinAndSelect('user.moderatedPlanets', 'moderatedPlanet')
      .getOne()
    if (user.moderatedPlanetIds.length >= 5)
      throw new Error('Cannot moderate more than 5 planets')

    const planet = await this.planetRepo.save({
      name,
      description,
      creatorId: userId,
      galaxies,
      nsfw,
      color: randomEnum(Color)
    })

    await this.planetRepo
      .createQueryBuilder()
      .relation(Planet, 'moderators')
      .of(planet.id)
      .add(userId)

    await this.planetRepo
      .createQueryBuilder()
      .relation(Planet, 'users')
      .of(planet.id)
      .add(userId)

    return true
  }

  @Query(() => Planet, { nullable: true })
  async planet(@Arg('name') name: string, @Ctx() { userId }: Context) {
    const qb = this.planetRepo
      .createQueryBuilder('planet')
      .andWhere('planet.name ILIKE :name', {
        name: handleUnderscore(name)
      })
      .leftJoinAndSelect('planet.moderators', 'moderator')
      .leftJoinAndSelect('planet.users', 'user')
      .leftJoinAndSelect('planet.channels', 'channel')
    return qb.getOne()
  }

  @Authorized()
  @Mutation(() => Boolean)
  async joinPlanet(
    @Arg('planetId', () => ID) planetId: number,
    @Ctx() { userId }: Context
  ) {
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'joinedPlanets')
      .of(userId)
      .add(planetId)
    await this.planetRepo.increment({ id: planetId }, 'userCount', 1)
    return true
  }

  @Authorized()
  @Mutation(() => Boolean)
  async leavePlanet(
    @Arg('planetId', () => ID) planetId: number,
    @Ctx() { userId }: Context
  ) {
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'joinedPlanets')
      .of(userId)
      .remove(planetId)
    await this.planetRepo.decrement({ id: planetId }, 'userCount', 1)
    return true
  }

  @Authorized()
  @Mutation(() => Boolean)
  async mutePlanet(
    @Arg('planetId', () => ID) planetId: number,
    @Ctx() { userId }: Context
  ) {
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'mutedPlanets')
      .of(userId)
      .add(planetId)
    return true
  }

  @Authorized()
  @Mutation(() => Boolean)
  async unmutePlanet(
    @Arg('planetId', () => ID) planetId: number,
    @Ctx() { userId }: Context
  ) {
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'mutedPlanets')
      .of(userId)
      .remove(planetId)
    return true
  }

  @Query(() => PlanetsResponse)
  async planets(
    @Args()
    { sort, joinedOnly, galaxy, page, pageSize }: PlanetsArgs,
    @Ctx() { userId }: Context
  ) {
    const qb = this.planetRepo.createQueryBuilder('planet')

    if (sort === PlanetSort.FEATURED) {
      qb.andWhere('planet.featured = true').addOrderBy(
        'planet.featuredPosition',
        'ASC'
      )
    }

    if (galaxy) {
      qb.andWhere('planet.galaxy = :galaxy', { galaxy }).addOrderBy(
        'planet.name',
        'ASC'
      )
    }

    if (sort === PlanetSort.NEW) {
      qb.addOrderBy('planet.createdAt', 'DESC')
    } else if (sort === PlanetSort.TOP) {
      qb.addOrderBy('planet.userCount', 'DESC')
    } else if (sort === PlanetSort.AZ) {
      qb.addOrderBy('planet.name', 'ASC')
    }

    if (userId && joinedOnly) {
      const user = await this.userRepo.findOne(userId)
      qb.andWhere(`planet.id = ANY(:joinedPlanets)`, {
        joinedPlanets: user.joinedPlanetIds
      })
    }

    if (page >= 0) {
      qb.skip(page * pageSize).take(pageSize)
    }

    const planets = await qb.getMany()

    return {
      planets,
      page,
      nextPage: page >= 0 && planets.length >= pageSize ? page + 1 : null
    } as PlanetsResponse
  }

  @FieldResolver()
  async isJoined(@Root() planet: Planet, @Ctx() { userId }: Context) {
    if (!userId) return false
    return planet.userIds.includes(userId)
  }
}
