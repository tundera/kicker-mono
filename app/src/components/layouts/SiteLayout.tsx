import type { FC, ReactNode } from 'react'

import NProgress from 'next-nprogress-emotion'
import { useSession } from 'next-auth/client'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import Header from '@components/sections/Header'
import Subheader from '@components/sections/Header/SubHeader'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'

const SiteLayout: FC = ({ children, ...props }) => {
  const [session] = useSession()
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Flex direction="column" align="center" flexDirection="column" {...props}>
      <NProgress color={color} showAfterMs={300} spinner />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default SiteLayout

export const getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
