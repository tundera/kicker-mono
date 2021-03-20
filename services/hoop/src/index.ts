import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
import { ServerConfig } from './types'

export * from '../db'
export * from './types'

const isDev = process.env.TS_NODE_DEV === 'true'

export const config: ServerConfig = {
  port: Number(process.env.PORT) ?? 4000,
}

export const server = new ApolloServer({
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

server.listen(config).then(({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
})
