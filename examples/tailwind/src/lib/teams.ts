import { gql } from 'graphql-request'
import { client } from './graphql'

export const getTeams = async () => {
  return client.request(
    gql`
      {
        listTeams {
          id
          name
          city
          slug
          logo
        }
      }
    `,
  )
}

export const getTeamBySlug = async (slug: string) => {
  return client.request(
    gql`
      query TeamBySlug($slug: String!) {
        team(slug: $slug) {
          name
          city
          logo
          established
          wins
          losses
          players {
            name
            slug
            number
            position
            height
            weight
          }
        }
      }
    `,
    { slug },
  )
}
