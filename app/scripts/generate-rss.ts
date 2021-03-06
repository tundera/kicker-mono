#!/usr/bin/env ts-node-script

import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import RSS from 'rss'

const generateRssFeed = async () => {
  const feed = new RSS({
    title: 'Philip Johnston',
    site_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    feed_url: `${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`,
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'content', 'articles'))

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'content', 'articles', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
      })
    }),
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

const main = async () => {
  await generateRssFeed()
}

main().finally(() => {
  console.log('Successfully generated RSS feed ✅')
})
