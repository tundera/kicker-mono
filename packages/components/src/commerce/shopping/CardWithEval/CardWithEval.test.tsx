import { render } from '../../../../test/utils'

import { CardWithEval } from './CardWithEval'

test('renders CardWithEval component with title', () => {
  const { getByText } = render(
    <CardWithEval
      title="CardWithEval"
      description="Test description"
      price="$0.00"
      slug="/slug"
      bgImage="/images/tailwind/landscape/3.jpg"
    />,
  )
  const title = getByText(/CardWithEval/)
  expect(title).toBeInTheDocument()
})
