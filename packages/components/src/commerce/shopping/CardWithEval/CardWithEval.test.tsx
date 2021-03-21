import { render } from '../../../../test/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './CardWithEval.stories'

const { Primary } = composeStories(stories)

test('renders CardWithEval component with title', () => {
  const { getByText } = render(<Primary />)
  const title = getByText(/CardWithEval/)
  expect(title).toBeInTheDocument()
})
