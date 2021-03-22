import { CustomNextPage } from 'types'
import Image from 'next/image'
import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { Post } from 'types'
import { Heading, Text, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import { mdxComponents } from '@components/mdx'
import { NextSeo } from 'next-seo'

export interface PostPageProps {
  post: Post
}

const PostPage: CustomNextPage<PostPageProps> = ({ post }) => {
  const color = useColorModeValue('gray.800', 'white')
  const bg = useColorModeValue('white', 'gray.800')
  const content = useHydrate(post, {
    components: mdxComponents,
  })
  return (
    <>
      <NextSeo
        openGraph={{
          title: `Tundera Dev | ${post.frontMatter.title}`,
          description: post.frontMatter.excerpt,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
          type: 'article',
          article: {
            publishedTime: post.frontMatter.publishedAt,
            authors: [post.frontMatter.author],
            tags: post.frontMatter.category,
          },
          images: [
            {
              url: post.frontMatter.image,
              width: 500,
              height: 300,
              alt: `${post.frontMatter.title} article cover photo`,
            },
          ],
        }}
      />
      <Flex flexDir="column" alignItems="center">
        <Box w="container.lg" bg={bg} p="8" color={color} shadow="lg">
          <Heading as="h1">{post.frontMatter.title}</Heading>
          {post.frontMatter.excerpt && <Text>{post.frontMatter.excerpt}</Text>}
          <hr />
          {post.frontMatter.image && (
            <Image
              src={post.frontMatter.image}
              alt={post.frontMatter.title}
              layout="fixed"
              width={375}
              height={425}
            />
          )}
          {content}
        </Box>
      </Flex>
    </>
  )
}

PostPage.getLayout = getLayout
export default PostPage

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode<Post>('post', context)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}