import { arg, extendType, inputObjectType, intArg, list, objectType, stringArg } from 'nexus'

/**
 * User Object Type
 */
export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id')
    t.string('name')
    t.string('email')
    t.field('emailVerified', {
      type: 'DateTime',
    })
    t.string('image')
    t.nonNull.field('createdAt', {
      type: 'DateTime',
    })
    t.nonNull.field('updatedAt', {
      type: 'DateTime',
    })
  },
})

/**
 * User Query Types
 */
export const UserQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      args: {
        email: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.user.findUnique({ where: { email: args?.email ?? undefined } })
      },
    })

    t.field('users', {
      type: list('User'),
      resolve(_parent, _args, ctx) {
        return ctx.db.user.findMany({})
      },
    })
  },
})

/**
 * User Input Types
 */
export const UserOrderByInput = inputObjectType({
  name: 'UserOrderByInput',
  definition(t) {
    t.field('email', {
      type: 'SortOrder',
    })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.nonNull.int('id')
  },
})

export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.nonNull.int('id')
    t.field('email', { type: 'StringFilter' })
  },
})
