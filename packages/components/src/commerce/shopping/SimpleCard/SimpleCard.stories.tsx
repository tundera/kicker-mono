import { Meta,Story } from '@storybook/react'
import { SimpleCard, SimpleCardProps } from './SimpleCard'

export default {
  title: 'SimpleCard',
  component: SimpleCard,
} as Meta

const Template: Story<SimpleCardProps> = (args) => <SimpleCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Avg',
  description: 'Detail is not an obsession, it is the very essence of perfection.',
  href: '#',
  image: {
    url: '/images/tailwind/object/1.png',
    alt: 'moto',
  },
}
