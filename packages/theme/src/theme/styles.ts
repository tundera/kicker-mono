import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

export default {
  global: (props: GlobalStyleProps) => ({
    html: {
      minWidth: '360px',
      scrollBehavior: 'smooth',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: mode('blackAlpha.900', 'whiteAlpha.900')(props),
    },
    body: {
      fontFamily: 'body',
      background: mode('blackAlpha.900', 'whiteAlpha.900')(props),
      lineHeight: 'base',
    },
  }),
}
