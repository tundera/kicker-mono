import { FC } from 'react'
import type { Post } from 'types'

import { Grid } from '@chakra-ui/react'
import BlogPostCard from 'src/components/ui/cards/BlogWithAuthor'

interface Props {
  posts?: Post[]
}

const PostsList: FC<Props> = ({ posts }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))',
        xl: 'repeat(3, minmax(0, 1fr))',
      }}
      alignItems="stretch"
      gap="12"
    >
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </Grid>
  )
}

export default PostsList
