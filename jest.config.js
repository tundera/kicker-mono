module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/tmp', '<rootDir>/dist', '<rootDir>/templates'],
  moduleNameMapper: {
    '^@kicker/components/(.*)$': '<rootDir>/packages/components/$1',
    '^@kicker/theme/(.*)$': '<rootDir>/packages/theme/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '.(ts|tsx)$': require.resolve('ts-jest/dist'),
    '.(js|jsx)$': require.resolve('babel-jest'),
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.css$': '<rootDir>/test/transforms/cssTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.vercel/'],
  testMatch: ['<rootDir>/**/*.test.{ts,tsx,js,jsx}'],
  testURL: 'http://localhost',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // collectCoverage: !!`Boolean(process.env.CI)`,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: ['/templates/'],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  globals: {
    'ts-jest': {
      tsconfig: __dirname + '/tsconfig.test.json',
      babelConfig: true,
      isolatedModules: true,
    },
  },
}
