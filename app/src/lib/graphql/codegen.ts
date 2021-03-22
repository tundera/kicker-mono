import type { GraphQLClient } from 'graphql-request'
import { useQuery, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables)
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type IntFilter = {
  contains: Scalars['Int'];
  endsWith: Scalars['Int'];
  equals: Scalars['Int'];
  gt: Scalars['Int'];
  gte: Scalars['Int'];
  in: Array<Scalars['Int']>;
  lt: Scalars['Int'];
  lte: Scalars['Int'];
  notIn: Array<Scalars['Int']>;
  startsWith: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains: Scalars['String'];
  endsWith: Scalars['String'];
  equals: Scalars['String'];
  gt: Scalars['String'];
  gte: Scalars['String'];
  in: Array<Scalars['String']>;
  lt: Scalars['String'];
  lte: Scalars['String'];
  notIn: Array<Scalars['String']>;
  startsWith: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserOrderByInput = {
  email?: Maybe<SortOrder>;
};

export type UserWhereInput = {
  email?: Maybe<StringFilter>;
  id: Scalars['Int'];
};

export type UserWhereUniqueInput = {
  id: Scalars['Int'];
};

export type UserByEmailQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type UserByEmailQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>>> }
);


export const UserByEmailDocument = `
    query UserByEmail($email: String) {
  user(email: $email) {
    name
    email
  }
}
    `
export const useUserByEmailQuery = <
      TData = UserByEmailQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: UserByEmailQueryVariables, 
      options?: UseQueryOptions<UserByEmailQuery, TError, TData>
    ) => 
    useQuery<UserByEmailQuery, TError, TData>(
      ['UserByEmail', variables],
      fetcher<UserByEmailQuery, UserByEmailQueryVariables>(client, UserByEmailDocument, variables),
      options
    )
export const UsersDocument = `
    query Users {
  users {
    id
    name
    email
  }
}
    `
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: UsersQueryVariables, 
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) => 
    useQuery<UsersQuery, TError, TData>(
      ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(client, UsersDocument, variables),
      options
    )