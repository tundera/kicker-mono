const cwd = process.cwd()

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: cwd,
        alias: {
          // resolve modules here
          test: './app/test',
        },
      },
    ],
    'superjson-next',
  ],
}
