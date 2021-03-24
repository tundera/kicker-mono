/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: 'string' },
  preImport: '',
  introspection: {
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    headers: {},
  },
  destination: './src/gqless/index.ts',
  subscriptions: false,
}

module.exports = config
