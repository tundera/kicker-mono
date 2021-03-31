import { Box, Flex,Image, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { FC } from 'react'

export const BlogCardWithTags: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.800', 'white')
  const excerptColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box w={{ base: '60', md: '80' }} h="90" m="auto" overflow="hidden" cursor="pointer" shadow="lg" rounded="lg">
      <LinkBox as="article" w="full" h="full" display="block">
        <Image alt="blog photo" src="/images/tailwind/blog/1.jpg" maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" p="4">
          <NextLink href="#" passHref>
            <LinkOverlay>
              <Text color="indigo.500" fontSize="md" fontWeight="medium">
                Article
              </Text>
              <Text color={titleColor} fontSize="xl" fontWeight="medium" mb="2">
                New Mac is here !
              </Text>
              <Text color={excerptColor} fontWeight="light" fontSize="md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
              </Text>
              <Flex flexWrap="wrap" justify="start" align="center" mt="4">
                <Box fontSize="xs" mr="2" px="4" py="2" color="gray.600" bg="blue.100" rounded="2xl">
                  #Car
                </Box>
                <Box fontSize="xs" mr="2" px="4" py="2" color="gray.600" bg="blue.100" rounded="2xl">
                  #Money
                </Box>
              </Flex>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}
