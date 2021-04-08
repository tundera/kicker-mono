import { Box, Flex } from '@chakra-ui/react'
import { CtaWithDescription } from '@kicker/components'
import { getLayout } from 'src/components/layouts/SiteLayout'
import type { CustomNextPage as NextPage } from 'types'

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
