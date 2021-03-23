import type { AppProps } from 'next/app'

import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import Head from 'next/head'
import { useColorModeValue, ChakraProvider } from '@chakra-ui/react'
import { createBrandLogoIcon } from '@kicker/components'

export default function App({ Component, pageProps }: AppProps) {
  const logoColor = useColorModeValue('#000000', '#FFFFFF')
  const BrandLogoIcon = createBrandLogoIcon(logoColor)

  return (
    <ChakraProvider resetCSS>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
      </Head>
      <DokzProvider
        headerItems={[
          <GithubLink key="0" url="https://github.com/remorses/dokz" />,
          <ColorModeSwitch key="1" />,
        ]}
        sidebarOrdering={{
          'index.mdx': true,
          Documents_Group: {
            'another.mdx': true,
          },
        }}
        headerLogo={<BrandLogoIcon w="16" h="16" />}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  )
}
