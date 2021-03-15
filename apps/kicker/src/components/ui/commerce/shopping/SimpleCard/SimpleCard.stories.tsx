import { Story, Meta } from '@storybook/react'

import SimpleCard, { SimpleCardProps } from '@components/ui/commerce/shopping/SimpleCard'

export default {
  title: 'SimpleCard',
  component: SimpleCard,
} as Meta

const Template: Story<SimpleCardProps> = (args) => <SimpleCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Avg',
  description: 'Detail is not an obsession, it is the very essence of perfection.',
  image: {
    alt: 'moto',
    src: '/images/tailwind/object/1.png',
  },
}
