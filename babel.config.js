module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-env',
  ]

  const plugins = [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          // resolve modules here
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
