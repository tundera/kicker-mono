module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  moduleDirectories: [
    'node_modules',
    'test',
    __dirname, // the root directory
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.css$': '<rootDir>/test/transforms/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^@tunderadev/components/(.*)$': '<rootDir>/packages/components/$1',
    '^@tunderadev/theme/(.*)$': '<rootDir>/packages/theme/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.vercel/'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
