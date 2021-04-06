import splitbee from '@splitbee/web'
import { Provider as AuthProvider } from 'next-auth/client'
import { useEffect, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, useQueryErrorResetBoundary } from 'react-query'
import FormProvider from 'src/components/providers/FormProvider'
import QueryProvider from 'src/components/providers/QueryProvider'
import ThemeProvider from 'src/components/providers/ThemeProvider'
import RootErrorFallback from 'src/components/utility/RootErrorFallback'
import type { CustomAppProps } from 'types'

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../test/mocks')
// }

function MyApp({ Component, pageProps, router }: CustomAppProps) {
  const { reset } = useQueryErrorResetBoundary()
  const getLayout = Component.getLayout || ((page) => page)

  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

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
        <QueryProvider client={queryClientRef.current} state={pageProps.dehydratedState}>
          <AuthProvider session={pageProps.session}>
            <FormProvider>{getLayout(<Component {...pageProps} />)}</FormProvider>
          </AuthProvider>
        </QueryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default MyApp
