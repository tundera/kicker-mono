import { render } from 'test/utils'

import SimpleList from '@components/ui/lists/SimpleList'

test('renders SimpleList component with title', () => {
  const { getByText } = render(<SimpleList title="SimpleList" />)
  const title = getByText(/SimpleList/)
  expect(title).toBeInTheDocument()
})
