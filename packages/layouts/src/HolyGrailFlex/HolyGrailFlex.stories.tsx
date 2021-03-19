import { Story, Meta } from '@storybook/react'

import { HolyGrailFlex, HolyGrailFlexProps } from './HolyGrailFlex'

export default {
  title: 'HolyGrail (Flexbox)',
  component: HolyGrailFlex,
} as Meta

const Template: Story<HolyGrailFlexProps> = (args) => <HolyGrailFlex {...args} />

export const Default = Template.bind({})
Default.args = {}
