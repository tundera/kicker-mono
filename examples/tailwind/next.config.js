/* eslint-disable @typescript-eslint/no-var-requires */
const withPreconstruct = require('@preconstruct/next')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

const nextConfig = {
  target: 'experimental-serverless-trace',
  reactStrictMode: true,
  future: {
    webpack5: false,
  },
  // experimental: {
  //   reactMode: 'concurrent',
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
  // eslint-disable-next-line require-await
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
