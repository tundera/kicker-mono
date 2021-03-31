import { Meta,Story } from '@storybook/react'
import React from 'react'
import Header from 'src/components/sections/Header'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
