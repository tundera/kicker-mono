import '../styles/globals.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import SEO from '../../next-seo.json'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
