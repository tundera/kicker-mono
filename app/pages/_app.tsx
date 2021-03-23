import type { CustomAppProps } from 'types'

import { useEffect } from 'react'
import { QueryClient, useQueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider as AuthProvider } from 'next-auth/client'
import splitbee from '@splitbee/web'

import FormProvider from 'src/components/providers/FormProvider'
import QueryProvider from 'src/components/providers/QueryProvider'
import ThemeProvider from 'src/components/providers/ThemeProvider'
import RootErrorFallback from 'src/components/utility/RootErrorFallback'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, router }: CustomAppProps) {
  const { reset } = useQueryErrorResetBoundary()
  const getLayout = Component.getLayout || ((page) => page)

  useEffect((): void => {
    splitbee.init({
      scriptUrl: '/bee.js',
      apiUrl: '/_hive',
    })
  }, [])

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      resetKeys={[router.asPath]}
      onReset={reset}
    >
      <ThemeProvider>
        <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
          <AuthProvider session={pageProps.session}>
            <FormProvider>{getLayout(<Component {...pageProps} />)}</FormProvider>
          </AuthProvider>
        </QueryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default MyApp
