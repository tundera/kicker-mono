import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { getLayout } from 'src/components/layouts/SiteLayout'
import CallToAction from 'src/components/ui/ctas/CtaWithDescription'
import FeaturesGrid from 'src/components/ui/features/FeaturesGrid'
import FeaturesWithCards from 'src/components/ui/features/FeaturesWithCards'
import { mainFeatures } from 'src/lib/static/features'
import type { CustomNextPage as NextPage } from 'types'

const AboutPage: NextPage = () => {
  const bg = useColorModeValue('gray.800', 'indigo.700')

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box w="full">
          <CallToAction
            title="About"
            subtitle="The best of what's around."
            description="Kicker takes the headache out configuring your application by choosing the best tools available so you dont' have to."
          />
        </Box>
        <Box w="full" bg={bg} py={{ base: '8', md: '16', lg: '24' }}>
          <FeaturesWithCards />
        </Box>
        <Box w="full">
          <FeaturesGrid
            title="Tooling and Features"
            subtitle="Kicker has baked-in support for a variety of popular tools to get your application off
            the ground quickly and keep it running smoothly."
            features={mainFeatures}
          />
        </Box>
      </Flex>
    </>
  )
}

AboutPage.getLayout = getLayout

export default AboutPage
