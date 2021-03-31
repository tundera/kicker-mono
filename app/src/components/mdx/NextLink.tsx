/* eslint-disable jsx-a11y/anchor-has-content */
import { chakra } from '@chakra-ui/react'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { FC } from 'react'

const CustomLink: FC<LinkProps> = ({ as, href, ...props }) => {
  return (
    <NextLink as={as} href={href}>
      <a {...props} />
    </NextLink>
  )
}

const NextMdxLink = chakra(CustomLink)

export default NextMdxLink
