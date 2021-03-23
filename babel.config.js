const cwd = process.cwd()

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
        root: cwd,
        alias: {
          // resolve modules here
          '@kicker/components': './packages/components/src',
          '@kicker/theme': './packages/theme/src',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ]

  const babelrcRoots = [
    '.',
    'packages/*',
    'examples/*',
    'services/*',
    'app',
    'website',
    'studio',
    'scripts',
  ]

  return {
    presets,
    plugins,
    babelrcRoots,
  }
}
