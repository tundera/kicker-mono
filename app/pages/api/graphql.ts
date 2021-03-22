import { ApolloServer } from 'apollo-server-micro'
import { schema } from '@lib/graphql/schema'
import { createContext, isDev } from '@lib/graphql/helpers'

const server = new ApolloServer({
  schema,
  context: createContext,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
  tracing: isDev(),
  introspection: isDev(),
  debug: isDev(),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({
  path: '/api/graphql',
})