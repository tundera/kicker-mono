import { Meta,Story } from '@storybook/react'
import React from 'react'
import CardWithEval, { CardWithEvalProps } from './CardWithEval'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CardWithEval',
  component: CardWithEval,
} as Meta

const Template: Story<CardWithEvalProps> = (args) => <CardWithEval {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Tomorrow',
  description: "You can't buy your future, but you can do it. Money is nothing, you're everything.",
  price: '$220',
  bgImage: '/images/tailwind/landscape/2.jpg',
}
