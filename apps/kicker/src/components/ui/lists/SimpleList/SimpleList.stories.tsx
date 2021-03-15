import React from 'react'
import { Story, Meta } from '@storybook/react'

import SimpleList, { SimpleListProps } from '@components/ui/lists/SimpleList'
// import * as DependentStories from './Dependent.stories'

export default {
  title: 'SimpleList',
  component: SimpleList,
} as Meta

const Template: Story<SimpleListProps> = (args) => <SimpleList {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Employees',
  subheading: 'Arrival info of corporate employees to conference.',
  items: [
    {
      title: 'CEO',
      label: 'Jane Smith',
      image: { src: '/images/tailwind/person/3.jpg', alt: 'Jane Smith avatar' },
      time: '8:00am',
      href: '/people/jane-smith',
    },
    {
      title: 'CTO',
      label: 'Doug Smith',
      image: { src: '/images/tailwind/person/6.jpg', alt: 'Doug Smith avatar' },
      time: '7:40am',
      href: '/people/doug-smith',
    },
    {
      title: 'Sr. VP Engineering',
      label: 'Ellie Smith',
      image: { src: '/images/tailwind/person/7.jpg', alt: 'Ellie Smith avatar' },
      time: '6:00am',
      href: '/people/ellie-smith',
    },
    {
      title: 'Sr. VP Marketing',
      label: 'Jenny Smith',
      image: { src: '/images/tailwind/person/10.jpg', alt: 'Jenny Smith avatar' },
      time: '5:00am',
      href: '/people/jenny-smith',
    },
  ],
}
