import { Meta,Story } from '@storybook/react'
import { ColorfulCard, ColorfulCardProps } from './ColorfulCard'

export default {
  title: 'ColorfulCard',
  component: ColorfulCard,
} as Meta

const Template: Story<ColorfulCardProps> = (args) => <ColorfulCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Avg',
  description: 'Detail is not an obsession, it is the very essence of perfection.',
  price: '$20',
  image: {
    alt: 'moto',
    src: '/images/tailwind/object/4.jpg',
  },
}
