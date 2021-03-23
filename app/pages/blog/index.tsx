import { CustomNextPage, Post } from 'types'
import { getAllMdxNodes } from 'next-mdx'
import { useState } from 'react'
import {
  useColorModeValue,
  Stack,
  Flex,
  HStack,
  Input,
  Box,
  Heading,
  List,
  ListItem,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react'
import { mdxComponents } from 'src/components/mdx'
import { getLayout } from 'src/components/layouts/SiteLayout'
import PostsList from 'src/components/ui/lists/PostsList'
import { Search } from 'react-feather'

export interface BlogPageProps {
  posts: Post[]
}

const BlogPage: CustomNextPage<BlogPageProps> = ({ posts }) => {
  const headingColor = useColorModeValue('black', 'white')
  const resultsColor = useColorModeValue('gray.600', 'gray.400')
  const iconColor = useColorModeValue('gray.400', 'gray.300')
  const borderColor = useColorModeValue('gray.300', 'gray.900')
  const searchColor = useColorModeValue('gray.900', 'gray.100')
  const searchBg = useColorModeValue('white', 'gray.800')

  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.frontMatter.publishedAt)) - Number(new Date(a.frontMatter.publishedAt)),
    )
    .filter((post) => post.frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Stack spacing={8} maxW="container.xl">
          <Box w="full" bg="white" p="12" h="container.lg">
            <Flex align="flex-end" justify="space-between" mb="12">
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="gray.800" mb="4">
                  All Posts
                </Text>
                <Text fontSize="2xl" fontWeight="light" color="gray.400">
                  Check out some of my blog posts here.
                </Text>
              </Box>
              <Box textAlign="end">
                <HStack as="form" display="flex" w="full" maxW="sm" spacing="3">
                  <Box position="relative">
                    <Input
                      type="text"
                      color={searchColor}
                      bg={searchBg}
                      aria-label="Search posts"
                      display="block"
                      w="full"
                      px="4"
                      py="2"
                      borderWidth="1px"
                      borderColor={borderColor}
                      rounded="md"
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search posts"
                      sx={{
                        '--tw-ring-opacity': '1',
                        '--tw-ring-color': 'rgba(99, 102, 241, var(--tw-ring-opacity))',
                        '--tw-ring-offset-width': '2px',
                        '--tw-ring-offset-color': '#ddd6fe',
                        '--tw-ring-offset-shadow':
                          'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                        '--tw-ring-shadow':
                          'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                      }}
                      _focus={{
                        outlineColor: 'var(--tw-ring-color)',
                        outline: '2px solid transparent',
                        outlineOffset: '2px',
                        borderColor: 'transparent',
                        boxShadow:
                          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                      }}
                      _placeholder={{ color: 'gray.400' }}
                    />
                    <Icon
                      as={Search}
                      fill="none"
                      stroke="currentColor"
                      position="absolute"
                      right="3"
                      top="3"
                      h="5"
                      w="5"
                      color={iconColor}
                    />
                  </Box>
                </HStack>
              </Box>
            </Flex>
            {!filteredBlogPosts.length && (
              <Text color={resultsColor} mb="4">
                No posts found.
              </Text>
            )}
            {filteredBlogPosts && <PostsList posts={filteredBlogPosts} />}
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

BlogPage.getLayout = getLayout

export default BlogPage

export async function getStaticProps() {
  const posts = await getAllMdxNodes<Post>('post', {
    components: mdxComponents,
  })

  return {
    props: {
      posts,
    },
  }
}
