import type { GetServerSideProps } from 'next'
import type { CustomNextPage } from 'types'

import { Flex, Heading } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/AccountLayout'
import SimpleList from '@components/ui/lists/SimpleList'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const pageSlug = params?.slug as string

  //   if (/* some condition */) {
  //     return {
  //       notFound: true,
  //     }
  //   }

  return {
    props: {},
  }
}

const AccountPage: CustomNextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1">Account Page</Heading>
      </Flex>
    </>
  )
}

AccountPage.getLayout = getLayout

export default AccountPage
