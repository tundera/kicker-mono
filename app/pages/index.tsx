import type { CustomNextPage as NextPage } from 'types'

import { Flex, Box } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import { CtaWithDescription } from '@kicker/components'

const HomePage: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box w="full">
          <CtaWithDescription
            title="Kicker"
            subtitle="The ultimate Next.js template."
            description="A Next.js + GraphQL boilerplate for JAMStack development. Literally everything you want. Opinionated so you don't have to be."
            link={{ label: 'Learn more', href: '/about' }}
          />
        </Box>
      </Flex>
    </>
  )
}

HomePage.getLayout = getLayout

export default HomePage
