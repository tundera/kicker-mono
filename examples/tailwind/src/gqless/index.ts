/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from '@gqless/react'
import { createClient, QueryFetcher } from 'gqless'
import {
  GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated'

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "http://localhost:4000" if needed
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  })

  const json = await response.json()

  return json
}

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
})

export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
} = client

export const {
  graphql,
  useQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
})

export * from './schema.generated'
