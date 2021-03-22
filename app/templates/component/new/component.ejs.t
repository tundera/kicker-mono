---
to: "<%= location ? `src/components/${location}` : 'src/components' %>/<%= h.camelizedBaseName(name) %>/index.tsx"
---
<% formattedPath = h.camelizedPathName(name) -%>
<% component = h.camelizedBaseName(name) -%>
import { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, Heading, Text, Box, Flex } from '@chakra-ui/react'

interface Props {
  title: string
}

const <%= component %>: FC<Props> = ({ title }) => {
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Flex as="article" direction="column" align="center" color={color} w="full" bg={bg}>
      <Heading as="h2" fontSize="3xl">
        {title}
      </Heading>
      <Box>
        <Text>This component was generated by Hygen</Text>
      </Box>
    </Flex>
  )
}

export default <%= component %>

export type { Props as <%= component %>Props }