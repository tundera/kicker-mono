import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import colors from './colors'
import fonts from './fonts'
// import config from './config'
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'
// import Menu from './components/menu'
// import Badge from './components/badge'

const overrides: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
  fonts,
  colors,
  components: {
    // Button,
    // Menu,
    // Badge,
  },
}

export const theme = extendTheme(overrides)
