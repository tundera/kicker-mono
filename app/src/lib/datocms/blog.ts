import { request } from 'src/lib/datocms'

import BlogPostsQuery from 'src/lib/datocms/operations/BlogPosts'
import BlogPostBySlugQuery from 'src/lib/datocms/operations/BlogPostBySlug'

export function getBlogPosts(preview = false) {
  const options = { query: BlogPostsQuery, variables: { limit: 10 }, preview }
  return request({ ...options })
}

export function getBlogPostBySlug(slug: string, preview?: boolean) {
  const options = { query: BlogPostBySlugQuery, variables: { slug }, preview }
  return request({ ...options })
}
