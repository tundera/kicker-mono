/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('merge-anything')

const baseConfig = require('../../jest.config')

module.exports = merge(baseConfig, {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  mapCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/templates/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
})
