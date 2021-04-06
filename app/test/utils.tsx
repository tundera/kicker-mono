import { ThemeProvider } from '@kicker/theme'
import { render as defaultRender } from '@testing-library/react'
import { renderHook as defaultRenderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'

export * from '@testing-library/react'

// --------------------------------------------------------------------------------
// This file customizes the render() and renderHook() test functions provided
// by React testing library. It adds a router context wrapper with a mocked router.
//
// You should always import `render` and `renderHook` from this file
//
// This is the place to add any other context providers you need while testing.
// --------------------------------------------------------------------------------

const createWrapper = () => {
  // creates a new QueryClient for each test
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // turns retries off
        retry: false,
      },
    },
  })

  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}

// --------------------------------------------------
// render()
// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
export function render(ui: RenderUI, { wrapper, ...options }: RenderOptions = {}) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = createWrapper()
  }
  return defaultRender(ui, { wrapper, ...options })
}

// --------------------------------------------------
// renderHook()
// --------------------------------------------------
// Override the default test renderHook with our own
//
// You can override the router mock like this:
//
// const result = renderHook(() => myHook(), {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
export function renderHook(hook: RenderHook, { wrapper, ...options }: RenderHookOptions = {}) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = createWrapper()
  }

  return defaultRenderHook(hook, { wrapper, ...options })
}

type DefaultParams = Parameters<typeof defaultRender>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1]

type DefaultHookParams = Parameters<typeof defaultRenderHook>
type RenderHook = DefaultHookParams[0]
type RenderHookOptions = DefaultHookParams[1]
