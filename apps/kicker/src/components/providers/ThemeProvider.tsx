import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'styles/theme'
import fonts from 'styles/font-face'

const ThemeProvider = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
