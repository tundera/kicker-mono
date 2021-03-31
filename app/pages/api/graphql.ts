import { ApolloServer } from 'apollo-server-micro'
import { createContext, isDev } from 'src/lib/graphql/helpers'
import { schema } from 'src/lib/graphql/schema'

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
