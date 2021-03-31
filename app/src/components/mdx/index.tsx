/* eslint-disable react/display-name */
import { Heading, ListItem,Text, UnorderedList } from '@chakra-ui/react'
import { preToCodeBlock } from 'mdx-utils'
import Image from 'next/image'
import CodeBlock from 'src/components/mdx/CodeBlock'
import ContentHeading from 'src/components/mdx/ContentHeading'
import NextMdxLink from 'src/components/mdx/NextLink'
import Header from 'src/components/sections/Header'

export const mdxComponents = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    }
    return <pre {...preProps} />
  },
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <ContentHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <ContentHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <ContentHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <ContentHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props) => <ContentHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  ul: ({ children }) => <UnorderedList my={2}>{children}</UnorderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  p: ({ children }) => <Text my={2}>{children}</Text>,
  a: (props) => {
    return (
      <NextMdxLink color="blackAlpha.500" _hover={{ textDecoration: 'underline' }} {...props} />
    )
  },
  Header,
  Image,
}
