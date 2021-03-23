import type { FC, ReactNode } from 'react'

import NProgress from 'next-nprogress-emotion'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import Header from 'src/components/sections/Header'
import Subheader from 'src/components/sections/Header/SubHeader'
import Footer from 'src/components/sections/Footer'
import Container from 'src/components/sections/Container'

const AccountLayout: FC = ({ children, ...props }) => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Flex direction="column" align="center" flexDirection="column" {...props}>
      <NProgress color={color} showAfterMs={300} spinner />
      <Header />
      <Subheader />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default AccountLayout

export const getLayout = (page: ReactNode) => <AccountLayout>{page}</AccountLayout>
