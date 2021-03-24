module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ]

  const plugins = [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          // resolve modules here
          '@kicker/components': './packages/components',
          '@kicker/theme': './packages/theme',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ]

  return {
    presets,
    plugins,
  }
}
