const cwd = process.cwd()

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: cwd,
        alias: {
          // resolve modules here
          test: './packages/components/test',
        },
      },
    ],
  ],
}
