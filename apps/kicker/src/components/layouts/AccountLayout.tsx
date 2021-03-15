import type { FC, ReactNode } from 'react'

import NProgress from 'next-nprogress-emotion'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import Header from '@components/sections/Header'
import Subheader from '@components/sections/Header/SubHeader'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'

const AccountLayout: FC = ({ children, ...props }) => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Flex direction="column" align="center" flexDirection="column" {...props}>
      <NProgress color={color} options={{ trickleSpeed: 50 }} showAfterMs={300} spinner />
      <Header />
      <Subheader />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default AccountLayout

export const getLayout = (page: ReactNode) => <AccountLayout>{page}</AccountLayout>
