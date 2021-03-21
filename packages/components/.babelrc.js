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
        root: ['.'],
        alias: {
          'test-utils': './packages/components/test/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
  ],
}
