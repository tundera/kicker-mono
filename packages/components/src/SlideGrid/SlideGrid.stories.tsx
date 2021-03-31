import { Meta,Story } from '@storybook/react'
import { SlideGrid } from './SlideGrid'

export default {
  title: 'SlideGrid',
  component: SlideGrid,
} as Meta

const Template: Story = (args) => <SlideGrid {...args} />

export const Default = Template.bind({})
Default.args = {}
