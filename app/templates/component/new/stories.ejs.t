---
to: "<%= location ? `src/components/${location}` : 'src/components' %>/<%= h.camelizedBaseName(name) %>/<%= h.camelizedBaseName(name) %>.stories.tsx"
---
<% formattedPath = location ? `${location}/${h.camelizedBaseName(name)}` : h.camelizedBaseName(name) -%>
<% component = h.camelizedBaseName(name) -%>
import React from 'react'
import { Story, Meta } from '@storybook/react'

import <%= component %> from 'src/components/<%= formattedPath %>'
// import * as DependentStories from './Dependent.stories'

export default {
  title: '<%= component %>',
  component: <%= component %>,
} as Meta

const Template: Story<<%= component %>Props> = (args) => <<%= component %> {...args} />

export const Default = Template.bind({})
Default.args = {
  //   ...DependentStories.Default.args,
}
