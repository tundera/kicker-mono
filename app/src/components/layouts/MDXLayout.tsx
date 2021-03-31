import { Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { FC } from 'react'
import SiteLayout from 'src/components/layouts/SiteLayout'
import { mdxComponents } from 'src/components/mdx'

const MDXLayout: FC = ({ children, ...props }) => {
  return (
    <SiteLayout {...props}>
      <Container maxW="750px">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </Container>
    </SiteLayout>
  )
}

export default MDXLayout
