import type { StoryContext } from '@storybook/react'

import { themes } from '@storybook/theming'
import { withNextRouter } from 'storybook-addon-next-router'
import { withPerformance } from 'storybook-addon-performance'
import { addDecorator } from '@storybook/react'
// import { withTests } from '@storybook/addon-jest'
import '@storybook/addon-console' // Automatically forwards all logs in the "Actions" panel - See https://github.com/storybookjs/storybook-addon-console

import { Flex, Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Sun, Moon } from 'react-feather'

import { ThemeProvider } from '@kicker/theme'
import { StorySortMethod } from '@storybook/addons'
import { FC } from 'react'

// Adapted from https://github.com/UnlyEd/next-right-now/blob/e5aba8eaf02918d9506008ee1f11c38954fedc86/.storybook/preview.js

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
    expanded: true,
  },
  options: {
    storySort: {
      method: 'alphebetical' as StorySortMethod,
      order: [
        'App', // Should be first
        'Kicker', // Should be second, if kept around
        'Storybook Examples', // Should be last, if kept around
      ],
    },
  },
  docs: {
    theme: themes.normal,
  },
}

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const ColorModeToggleBar: FC = () => {
  const { toggleColorMode } = useColorMode()
  const iconColor = useColorModeValue('white', 'gray.800')
  const SwitchIcon = useColorModeValue(Moon, Sun)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color={iconColor}
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
)

const withProviders = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  return (
    <ThemeProvider>
      <Box dir={dir} id="story-wrapper" minH="100vh">
        <ColorModeToggleBar />
        <Flex direction="column" align="center">
          <StoryFn />
        </Flex>
      </Box>
    </ThemeProvider>
  )
}

export const decorators = [withProviders]

addDecorator(withPerformance)

/**
 * Configure Jest Storybook for all stories.
 *
 * Each story must define which test it's associated to, to show the associated tests results in the preview.
 * See https://github.com/storybookjs/storybook/tree/master/addons/jest#usage
 *
 * @see https://github.com/storybookjs/storybook/tree/master/addons/jest
 */

// try {
//   let testResults
//   testResults = require('../.jest-test-results.json')

//   addDecorator(
//     withTests({
//       results: testResults,
//     }),
//   )
// } catch (err) {
//   console.log(`Couldn't find ../.jest-test-results.json, Jest tests might not work properly.`)
// }
