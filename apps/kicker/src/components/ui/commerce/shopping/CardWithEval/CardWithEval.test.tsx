import { render } from 'test-utils'

import CardWithEval from './CardWithEval'

test('renders CardWithEval component with title', () => {
  const { getByText } = render(
    <CardWithEval
      title="CardWithEval"
      description="description"
      slug="slug"
      price="price"
      bgImage="/public/images/tailwind/blog/1.jpg"
    />,
  )
  const title = getByText(/CardWithEval/)
  expect(title).toBeInTheDocument()
})
