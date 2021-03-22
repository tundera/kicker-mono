/* eslint-disable @typescript-eslint/no-var-requires */
const compose = require('compose-function')
const { withDokz } = require('dokz/dist/plugin')

const composed = compose(withDokz)

module.exports = composed({
  target: 'experimental-serverless-trace',
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  //   experimental: {
  //     reactMode: 'concurrent',
  //   },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
