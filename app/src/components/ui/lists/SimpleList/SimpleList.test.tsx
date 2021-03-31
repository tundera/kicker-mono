import { render } from '../../../../../test/utils'
import { SimpleList } from './SimpleList'

test('renders SimpleList component with title', () => {
  const { getByText } = render(
    <SimpleList heading="SimpleList" subheading="Subheading" items={[]} />,
  )
  const title = getByText(/SimpleList/)
  expect(title).toBeInTheDocument()
})
