import { composeStories } from '@storybook/testing-react'
import { render } from 'test/utils'
import * as stories from './MotionBox.stories'

const { Primary } = composeStories(stories)

test('renders MotionBox component with title', () => {
  const { getByText } = render(<Primary title="Primary MotionBox Title" />)
  const title = getByText(/MotionBox/)
  expect(title).toBeInTheDocument()
})
