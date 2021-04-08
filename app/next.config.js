/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withPreconstruct = require('@preconstruct/next')
// const withTM = require('next-transpile-modules')(['@kicker/components', '@kicker/theme'])
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const plugins = [withMDX]
// const plugins = [withTM, withMDX]

const nextConfig = {
  target: 'experimental-serverless-trace',
  // eslint-disable-next-line require-await
  async redirects() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
        permanent: false,
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    reactMode: 'concurrent',
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  images: {
    domains: [
      'media.graphcms.com', // GraphCMS content
      'upload.wikimedia.org', // Wikipedia images
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        crypto: false,
      }
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

module.exports = withPreconstruct(withPlugins([...plugins], nextConfig))
// module.exports = withPlugins([...plugins], nextConfig)
