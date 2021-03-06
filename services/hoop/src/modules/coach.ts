import { extendType, inputObjectType, list, objectType, stringArg } from 'nexus'
import { Coach } from 'nexus-prisma'
/**
 * Coach Object Type
 */
export const CoachObject = objectType({
  name: Coach.$name,
  description: Coach.$description,
  definition(t) {
    t.field('id', Coach.id)
    t.field('createdAt', Coach.createdAt)
    t.field('updatedAt', Coach.updatedAt)
    t.field('handle', Coach.handle)
    t.field('name', Coach.name)
    t.field('teamId', Coach.teamId)
    t.field('type', Coach.type)
    t.field('isAssistant', Coach.isAssistant)
    // t.field('team', Coach.team)
    t.field('team', {
      type: Coach.team.type,
      resolve: (parent, _args, ctx) => {
        return ctx.db.coach
          .findUnique({
            where: { id: parent.id },
          })
          .team()
      },
    })
  },
})

/**
 * Coach Query Types
 */
export const CoachQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('coaches', {
      type: list('Coach'),
      resolve(_parent, _args, ctx) {
        return ctx.db.coach.findMany({})
      },
    })

    t.field('coachesByTeam', {
      type: list('Coach'),
      args: {
        id: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.coach.findMany({
          where: { teamId: args.id },
          orderBy: {
            name: 'desc',
          },
        })
      },
    })
  },
})

/**
 * Coach Input Types
 */
export const CoachOrderByInput = inputObjectType({
  name: 'CoachOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const CoachWhereUniqueInput = inputObjectType({
  name: 'CoachWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id')
  },
})

export const CoachWhereInput = inputObjectType({
  name: 'CoachWhereInput',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
