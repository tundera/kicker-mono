import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
// const token = process.env.GRAPHQL_API_TOKEN

export const client = new GraphQLClient(endpoint, {
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
})
