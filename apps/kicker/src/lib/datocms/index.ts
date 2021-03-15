import { GraphQLClient } from 'graphql-request'

type RequestOptions = {
  query: string
  variables?: {
    [key: string]: any
  }
  preview?: boolean
}

export function request({ query, variables, preview }: RequestOptions) {
  let endpoint = 'https://graphql.datocms.com/'

  if (process.env.DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.DATOCMS_ENVIRONMENT}`
  }

  if (preview) {
    endpoint += '/preview'
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
