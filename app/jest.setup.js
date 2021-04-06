// This is the jest 'setupFilesAfterEnv' setup file
// It's a good place to set globals, add global before/after hooks, etc

import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { setLogger } from 'react-query'
import { handlers } from './test/mocks'

export const server = setupServer(...handlers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
})
