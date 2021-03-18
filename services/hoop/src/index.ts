import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const isDev = process.env.TS_NODE_DEV === 'true'

const server = new ApolloServer({
  schema: schema,
  context: createContext,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
  tracing: isDev,
  introspection: isDev,
  debug: isDev,
})

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
})
