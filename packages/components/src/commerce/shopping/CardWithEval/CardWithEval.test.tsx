import { composeStories } from '@storybook/testing-react'
import { render } from 'test/utils'

import * as stories from './CardWithEval.stories'

const { Primary } = composeStories(stories)

test('renders CardWithEval component with title', () => {
  const { getByText } = render(
    <Primary
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
