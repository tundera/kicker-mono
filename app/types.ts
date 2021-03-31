/* eslint-disable @typescript-eslint/ban-types */
import type { NextComponentType, NextPage, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { MdxNode } from 'next-mdx/server'

export declare type CustomNextComponentType<
  C = NextPageContext,
  IP = {},
  P = {}
> = NextComponentType<C, IP, P>

export interface CustomAppProps<P = {}> extends AppProps<P> {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout?: (component: JSX.Element) => JSX.Element
  }
}

export declare type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (component: JSX.Element) => JSX.Element
}

export type Category = MdxNode<{
    name: string
  }>

export interface Post
  extends MdxNode<{
    title: string
    author: string
    publishedAt?: string
    excerpt?: string
    image?: string
    category?: string[]
  }> {
  relationships?: {
    category: Category[]
  }
}
