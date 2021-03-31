import { Meta, Story } from '@storybook/react'
import { MotionBox, MotionBoxProps } from './MotionBox'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'MotionBox',
  component: MotionBox,
} as Meta

const Template: Story<MotionBoxProps> = (args) => <MotionBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  //   ...DependentStories.Primary.args,
}
