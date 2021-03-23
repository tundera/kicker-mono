---
to: graphql/modules/<%= h.camelizedBaseName(name) %>.ts
---
<% model = h.camelizedBaseName(name) -%>
<% plural = h.inflection.pluralize(model) -%>
import { objectType, extendType, list, intArg } from 'nexus'

/**
 * <%= model %> Object Type
 */
export const <%= model %> = objectType({
  name: <%= model %>.$name,
  description: <%= model %>.$description,
  definition(t) {
    t.field('id', <%= model %>.id)
    t.field('createdAt', <%= model %>.createdAt)
    t.field('updatedAt', <%= model %>.updatedAt)
  },
});

/**
 * <%= model %> Query Types
 */
export const <%= model %>Queries = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('<%= plural.toLowerCase() %>')({
      filtering: true,
      ordering: true,
      // use resolve for permission checks or to remove fields
      resolve: async (root, args, ctx, info, originalResolve) => {
        if (!isAdmin(ctx.user)) throw new ForbiddenError('Unauthorized');

        return await originalResolve(root, args, ctx, info);
      },
    });

    // Custom Query
    t.field('me', {
      type: 'User',
      description: 'Returns the currently logged in user',
      nullable: true,
      resolve: (_root, _args, ctx) => ctx.user,
    });

    t.list.field('availabilityForUser', {
      type: 'Event',
      description: 'Returns available time slots to schedule calls with an expert',
    })
  },
});

// Mutations
export const <%= camelized %>Mutations = extendType({
  type: 'Mutation',
  definition: (t) => {
  },
});
*/