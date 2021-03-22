import type { GetServerSideProps } from 'next'
import type { CustomNextPage } from 'types'

import { Flex, Heading } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/AccountLayout'
import { SimpleList } from '@components/ui/lists/SimpleList'
import { getSession } from 'next-auth/client'

interface AccountPageProps {
  session: any
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

const AccountPage: CustomNextPage<AccountPageProps> = ({ session }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1">Account Page</Heading>
        <Heading as="h2">Hi, {session.name}!</Heading>
        <SimpleList
          heading="Meetings"
          subheading="Meetings scheduled with co-workers"
          items={[
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
          ]}
        />
      </Flex>
    </>
  )
}

AccountPage.getLayout = getLayout

export default AccountPage
