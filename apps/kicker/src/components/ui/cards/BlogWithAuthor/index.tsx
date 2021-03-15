import { FC } from 'react'
import type { Post } from 'types'

import NextLink from 'next/link'
import {
  useColorModeValue,
  Box,
  LinkBox,
  Image,
  Link,
  LinkOverlay,
  Text,
  Flex,
  HStack,
  Tag,
} from '@chakra-ui/react'

interface Props {
  post: Post
}

const BlogCardWithAuthor: FC<Props> = ({ post }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  const altColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box
      w={{ base: '60', md: '80' }}
      mx="auto"
      overflow="hidden"
      cursor="pointer"
      shadow="lg"
      rounded="lg"
      transitionTimingFunction="ease-in"
      transitionDuration="150ms"
      _hover={{ opacity: '0.7' }}
    >
      <LinkBox as="article" w="full" display="block">
        <Image alt="blog photo" src={post.frontMatter.image} maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" h="full" p="4">
          <NextLink href={`/blog/posts/${post.slug}`} passHref>
            <LinkOverlay>
              <Text color={color} fontSize="xl" fontWeight="medium" mb="2">
                {post.frontMatter.title}
              </Text>
              <Text color={altColor} fontWeight="light" fontSize="md" height="20" overflow="hidden">
                {post.frontMatter.excerpt}
              </Text>
              <Flex align="center" mt="4">
                <Link display="block" position="relative" href="#">
                  <Image
                    mx="auto"
                    rounded="full"
                    w="10"
                    h="10"
                    objectFit="cover"
                    alt="profile"
                    src="/images/avatar.jpg"
                  />
                </Link>
                <Flex direction="column" justify="space-between" ml="4" fontSize="sm">
                  <Text color={color}>{post.frontMatter.author}</Text>
                  <Text color={altColor}>{post.frontMatter.publishedAt} - 6 min read</Text>
                </Flex>
              </Flex>
              <HStack mt="2">
                {post.frontMatter.category.map((item) => (
                  <Text
                    key={item}
                    textTransform="capitalize"
                    color="indigo.500"
                    fontSize="md"
                    fontWeight="medium"
                  >
                    <Tag>{item}</Tag>
                  </Text>
                ))}
              </HStack>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}

export default BlogCardWithAuthor

export type { Props as BlogCardWithAuthorProps }
