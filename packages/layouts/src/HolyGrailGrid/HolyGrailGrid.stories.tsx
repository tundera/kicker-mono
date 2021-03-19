import { Story, Meta } from '@storybook/react'

import { HolyGrailGrid, HolyGrailGridProps } from './HolyGrailGrid'

export default {
  title: 'HolyGrail (Grid)',
  component: HolyGrailGrid,
} as Meta

const Template: Story<HolyGrailGridProps> = (args) => <HolyGrailGrid {...args} />

export const Default = Template.bind({})
Default.args = {}
