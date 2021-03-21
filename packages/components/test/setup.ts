// This is the jest 'setupFilesAfterEnv' setup file
// It's a good place to set globals, add global before/after hooks, etc

import '@testing-library/jest-dom'
import { setGlobalConfig } from '@storybook/testing-react'
import { decorators, parameters, globalTypes } from '../.storybook/preview'

setGlobalConfig({
  decorators,
  parameters,
  argTypes: {
    ...globalTypes,
  },
})

export {} // so TS doesn't complain
