import { Story, Meta } from '@storybook/react'

import { SlideGrid, SlideGridProps } from './SlideGrid'

export default {
  title: 'SlideGrid',
  component: SlideGrid,
} as Meta

const Template: Story<SlideGridProps> = (args) => <SlideGrid {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Slide Grid',
  excerpt: 'About the post',
  slug: '/slug',
  image: {
    src: '/images/tailwind/blog/1.jpg',
    alt: 'Alt text',
  },
}
