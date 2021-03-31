import { Meta,Story } from '@storybook/react'
import { CardWithEval, CardWithEvalProps } from './CardWithEval'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'CardWithEval',
  component: CardWithEval,
} as Meta

const Template: Story<CardWithEvalProps> = (args) => <CardWithEval {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'CardWithEval',
  description: 'Test description',
  price: '$0.00',
  slug: '/slug',
  bgImage: '/images/tailwind/landscape/3.jpg',
}
