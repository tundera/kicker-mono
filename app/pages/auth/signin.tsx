import { Flex } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import { providers } from 'next-auth/client'
import { getLayout } from 'src/components/layouts/SiteLayout'
import LoginForm from 'src/components/ui/forms/LoginForm'
import type { CustomNextPage as NextPage } from 'types'

interface Props {
  providers: any
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      providers: await providers(),
    },
  }
}

const SignInPage: NextPage<Props> = ({ providers }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <LoginForm providers={providers} />
      </Flex>
    </>
  )
}

SignInPage.getLayout = getLayout

export default SignInPage
