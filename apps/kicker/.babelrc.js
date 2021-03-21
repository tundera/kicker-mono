module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@lib': './src/lib',
          styles: './styles',
          'test-utils': './apps/kicker/test/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'superjson-next',
  ],
}
