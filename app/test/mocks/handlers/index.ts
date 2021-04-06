import graphql from './graphql'
import rest from './rest'

export const handlers = [...rest, ...graphql]
