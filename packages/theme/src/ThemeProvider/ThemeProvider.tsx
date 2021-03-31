import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import type { FC } from 'react'
import fonts from '../font-face'
import { theme } from '../theme'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}
