import { render } from 'test/utils'

import CardWithEval from '@components/ui/commerce/shopping/CardWithEval'

test('renders CardWithEval component with title', () => {
  const { getByText } = render(<CardWithEval title="CardWithEval" />)
  const title = getByText(/CardWithEval/)
  expect(title).toBeInTheDocument()
})
