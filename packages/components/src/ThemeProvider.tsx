import type { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from './theme'
import fonts from './font-face'

const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
