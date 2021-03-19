import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

export * from '../db'
export * from './types'

const isDev = process.env.TS_NODE_DEV === 'true'

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
