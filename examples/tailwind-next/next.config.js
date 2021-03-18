const withPreconstruct = require('@preconstruct/next')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return []
  },
}

module.exports = withPreconstruct(
  withPlugins(
    [
      withMDX({
        pageExtensions: ['ts', 'tsx', 'mdx'],
        remarkPlugins: [
          require('remark-slug'),
          require('remark-footnotes'),
          require('remark-code-titles'),
        ],
        rehypePlugins: [require('mdx-prism')],
      }),
    ],
    nextConfig,
  ),
)
