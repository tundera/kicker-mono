import { Story, Meta } from '@storybook/react'

import { BlogCard, BlogCardProps } from './BlogCard'

export default {
  title: 'BlogCard',
  component: BlogCard,
} as Meta

const Template: Story<BlogCardProps> = (args) => <BlogCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Blog Post',
  excerpt: 'About the post',
  slug: '/slug',
  image: {
    src: '/images/tailwind/blog/1.jpg',
    alt: 'Alt text',
  },
}
