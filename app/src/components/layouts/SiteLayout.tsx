import { Flex,useColorModeValue } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'
import NProgress from 'next-nprogress-emotion'
import type { FC, ReactNode } from 'react'
import Container from 'src/components/sections/Container'
import Footer from 'src/components/sections/Footer'
import Header from 'src/components/sections/Header'
import Subheader from 'src/components/sections/Header/SubHeader'

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
