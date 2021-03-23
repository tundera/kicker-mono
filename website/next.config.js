/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withPreconstruct = require('@preconstruct/next')
const { withDokz } = require('dokz/dist/plugin')

const plugins = [withDokz]

const nextConfig = {
  target: 'experimental-serverless-trace',
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  //   experimental: {
  //     reactMode: 'concurrent',
  //   },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = withPreconstruct(withPlugins([...plugins], nextConfig))
