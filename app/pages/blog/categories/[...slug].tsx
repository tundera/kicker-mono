import SiteLayout from '@components/layouts/SiteLayout'
import { getAllMdxNodes, getMdxNode, getMdxPaths } from 'next-mdx'
import NextLink from 'next/link'
import { Box, Heading, List, ListItem, Link, Text } from '@chakra-ui/react'
import { Category, Post } from 'types'

export interface CategoryPageProps {
  category: Category
  posts?: Post[]
}

export default function CategoryPage({ category, posts }: CategoryPageProps) {
  return (
    <SiteLayout>
      <Box>
        <Heading as="h1">{category.frontMatter.name}</Heading>
        {posts.length ? (
          <List>
            {posts.map((post) => (
              <ListItem key={post.slug}>
                <Link as={NextLink} href={post.url}>
                  {post.frontMatter.title}
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
          <Text>No posts found.</Text>
        )}
      </Box>
    </SiteLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('category'),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const category = await getMdxNode<Category>('category', context)

  if (!category) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllMdxNodes<Post>('post')

  return {
    props: {
      category,
      posts: posts.filter((post) =>
        post.relationships.category.some(({ slug }) => slug === category.slug),
      ),
    },
  }
}
