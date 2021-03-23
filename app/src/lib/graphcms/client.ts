import { GraphQLClient } from 'graphql-request'
import { getGraphCmsTokens } from 'src/utils/decrypt'

const { GRAPH_CMS_TOKEN, GRAPH_CMS_MUTATION_TOKEN } = getGraphCmsTokens()
const graphCmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT)

const graphCmsAuthorizedClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPH_CMS_TOKEN}`,
  },
})

const graphCmsMutationClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${GRAPH_CMS_MUTATION_TOKEN}`,
  },
})

export { graphCmsClient, graphCmsAuthorizedClient, graphCmsMutationClient }
