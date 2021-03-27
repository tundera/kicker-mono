/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from 'gqless'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any
}

export interface CoachOrderByInput {
  name: SortOrder
}

export interface CoachWhereUniqueInput {
  id: Scalars['Int']
}

export interface CoachWhereInput {
  id: Scalars['Int']
  name: StringFilter
}

export interface PlayerOrderByInput {
  name: SortOrder
}

export interface PlayerWhereUniqueInput {
  id: Scalars['Int']
}

export interface PlayerWhereInput {
  id: Scalars['Int']
  name: StringFilter
}

export interface TeamOrderByInput {
  slug: SortOrder
}

export interface TeamWhereUniqueInput {
  id: Scalars['Int']
}

export interface TeamWhereInput {
  id: Scalars['Int']
  slug: StringFilter
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export interface StringFilter {
  contains: Scalars['String']
  endsWith: Scalars['String']
  equals: Scalars['String']
  gt: Scalars['String']
  gte: Scalars['String']
  in: Array<Scalars['String']>
  lt: Scalars['String']
  lte: Scalars['String']
  notIn: Array<Scalars['String']>
  startsWith: Scalars['String']
}

export interface IntFilter {
  contains: Scalars['Int']
  endsWith: Scalars['Int']
  equals: Scalars['Int']
  gt: Scalars['Int']
  gte: Scalars['Int']
  in: Array<Scalars['Int']>
  lt: Scalars['Int']
  lte: Scalars['Int']
  notIn: Array<Scalars['Int']>
  startsWith: Scalars['Int']
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Upload: true,
  DateTime: true,
  Json: true,
  Int: true,
  String: true,
  Float: true,
  SortOrder: true,
  Boolean: true,
}
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    coaches: { __type: '[Coach]' },
    coachesByTeam: { __type: '[Coach]', __args: { id: 'Int' } },
    players: { __type: '[Player]' },
    playersByTeam: { __type: '[Player]', __args: { id: 'Int' } },
    colorSchemes: { __type: '[ColorScheme]' },
    colorSchemeByTeam: { __type: 'ColorScheme', __args: { id: 'Int' } },
    team: { __type: 'Team', __args: { slug: 'String' } },
    teams: { __type: '[Team]' },
  },
  mutation: {},
  subscription: {},
  Coach: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    teamId: { __type: 'Int' },
    type: { __type: 'String' },
    isAssistant: { __type: 'String' },
    team: { __type: 'Team' },
  },
  CoachOrderByInput: { name: { __type: 'SortOrder!' } },
  CoachWhereUniqueInput: { id: { __type: 'Int!' } },
  CoachWhereInput: {
    id: { __type: 'Int!' },
    name: { __type: 'StringFilter!' },
  },
  Player: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    teamId: { __type: 'Int' },
    height: { __type: 'String!' },
    weight: { __type: 'String!' },
    number: { __type: 'String' },
    position: { __type: 'String' },
    team: { __type: 'Team' },
  },
  PlayerOrderByInput: { name: { __type: 'SortOrder!' } },
  PlayerWhereUniqueInput: { id: { __type: 'Int!' } },
  PlayerWhereInput: {
    id: { __type: 'Int!' },
    name: { __type: 'StringFilter!' },
  },
  ColorScheme: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    primary: { __type: 'String!' },
    secondary: { __type: 'String!' },
    teamId: { __type: 'Int' },
    team: { __type: 'Team' },
  },
  Team: {
    __typename: { __type: 'String!' },
    id: { __type: 'Int!' },
    createdAt: { __type: 'DateTime!' },
    updatedAt: { __type: 'DateTime!' },
    handle: { __type: 'String!' },
    name: { __type: 'String!' },
    slug: { __type: 'String!' },
    logoSlug: { __type: 'String!' },
    city: { __type: 'String!' },
    abbreviation: { __type: 'String!' },
    logo: { __type: 'String!' },
    wins: { __type: 'Int' },
    losses: { __type: 'Int' },
    winPercentage: { __type: 'Float' },
    conference: { __type: 'String!' },
    division: { __type: 'String!' },
    established: { __type: 'String!' },
    coaches: {
      __type: '[Coach!]!',
      __args: {
        cursor: 'CoachWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        orderBy: 'CoachOrderByInput',
        where: 'CoachWhereInput',
      },
    },
    players: {
      __type: '[Player!]!',
      __args: {
        cursor: 'PlayerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        orderBy: 'PlayerOrderByInput',
        where: 'PlayerWhereInput',
      },
    },
    colorScheme: { __type: 'ColorScheme' },
  },
  TeamOrderByInput: { slug: { __type: 'SortOrder!' } },
  TeamWhereUniqueInput: { id: { __type: 'Int!' } },
  TeamWhereInput: { id: { __type: 'Int!' }, slug: { __type: 'StringFilter!' } },
  StringFilter: {
    contains: { __type: 'String!' },
    endsWith: { __type: 'String!' },
    equals: { __type: 'String!' },
    gt: { __type: 'String!' },
    gte: { __type: 'String!' },
    in: { __type: '[String!]!' },
    lt: { __type: 'String!' },
    lte: { __type: 'String!' },
    notIn: { __type: '[String!]!' },
    startsWith: { __type: 'String!' },
  },
  IntFilter: {
    contains: { __type: 'Int!' },
    endsWith: { __type: 'Int!' },
    equals: { __type: 'Int!' },
    gt: { __type: 'Int!' },
    gte: { __type: 'Int!' },
    in: { __type: '[Int!]!' },
    lt: { __type: 'Int!' },
    lte: { __type: 'Int!' },
    notIn: { __type: '[Int!]!' },
    startsWith: { __type: 'Int!' },
  },
} as const

export interface Query {
  __typename: 'Query' | undefined
  coaches?: Maybe<Array<Maybe<Coach>>>
  coachesByTeam: (args?: {
    id?: Maybe<Scalars['Int']>
  }) => Maybe<Array<Maybe<Coach>>>
  players?: Maybe<Array<Maybe<Player>>>
  playersByTeam: (args?: {
    id?: Maybe<Scalars['Int']>
  }) => Maybe<Array<Maybe<Player>>>
  colorSchemes?: Maybe<Array<Maybe<ColorScheme>>>
  colorSchemeByTeam: (args?: {
    id?: Maybe<Scalars['Int']>
  }) => Maybe<ColorScheme>
  team: (args?: { slug?: Maybe<Scalars['String']> }) => Maybe<Team>
  teams?: Maybe<Array<Maybe<Team>>>
}

export interface Mutation {
  __typename: 'Mutation' | undefined
}

export interface Subscription {
  __typename: 'Subscription' | undefined
}

/**
 * NBA coach
 */
export interface Coach {
  __typename: 'Coach' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  teamId?: Maybe<ScalarsEnums['Int']>
  type?: Maybe<ScalarsEnums['String']>
  isAssistant?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
}

/**
 * NBA player
 */
export interface Player {
  __typename: 'Player' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  slug: ScalarsEnums['String']
  teamId?: Maybe<ScalarsEnums['Int']>
  height: ScalarsEnums['String']
  weight: ScalarsEnums['String']
  number?: Maybe<ScalarsEnums['String']>
  position?: Maybe<ScalarsEnums['String']>
  team?: Maybe<Team>
}

/**
 * Team color scheme
 */
export interface ColorScheme {
  __typename: 'ColorScheme' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  primary: ScalarsEnums['String']
  secondary: ScalarsEnums['String']
  teamId?: Maybe<ScalarsEnums['Int']>
  team?: Maybe<Team>
}

/**
 * NBA team
 */
export interface Team {
  __typename: 'Team' | undefined
  id: ScalarsEnums['Int']
  createdAt: ScalarsEnums['DateTime']
  updatedAt: ScalarsEnums['DateTime']
  handle: ScalarsEnums['String']
  name: ScalarsEnums['String']
  slug: ScalarsEnums['String']
  logoSlug: ScalarsEnums['String']
  city: ScalarsEnums['String']
  abbreviation: ScalarsEnums['String']
  logo: ScalarsEnums['String']
  wins?: Maybe<ScalarsEnums['Int']>
  losses?: Maybe<ScalarsEnums['Int']>
  winPercentage?: Maybe<ScalarsEnums['Float']>
  conference: ScalarsEnums['String']
  division: ScalarsEnums['String']
  established: ScalarsEnums['String']
  coaches: (args?: {
    cursor?: Maybe<CoachWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    orderBy?: Maybe<CoachOrderByInput>
    where?: Maybe<CoachWhereInput>
  }) => Array<Coach>
  players: (args?: {
    cursor?: Maybe<PlayerWhereUniqueInput>
    take?: Maybe<Scalars['Int']>
    skip?: Maybe<Scalars['Int']>
    orderBy?: Maybe<PlayerOrderByInput>
    where?: Maybe<PlayerWhereInput>
  }) => Array<Player>
  colorScheme?: Maybe<ColorScheme>
}

export interface SchemaObjectTypes {
  Query: Query
  Mutation: Mutation
  Subscription: Subscription
  Coach: Coach
  Player: Player
  ColorScheme: ColorScheme
  Team: Team
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'Coach'
  | 'Player'
  | 'ColorScheme'
  | 'Team'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortOrder: SortOrder | undefined
}
