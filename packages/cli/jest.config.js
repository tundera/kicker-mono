/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('merge-anything')

const baseConfig = require('../../jest.config')

module.exports = merge(baseConfig, {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
})
