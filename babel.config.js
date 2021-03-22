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
          // module aliases for test files
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
    'docs',
    'scripts',
  ]

  return {
    presets,
    plugins,
    babelrcRoots,
  }
}
