import Document, { Html, Head, Main, NextScript /*, DocumentContext */ } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import theme from 'styles/theme'

export default class CustomDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return initialProps
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async data-api="/_hive" src="/bee.js"></script>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link rel="manifest" href="/favicons/manifest.json" />
          <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#FFFFFF" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
