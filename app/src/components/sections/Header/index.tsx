import { chakra, Flex, useColorModeValue, useDisclosure,VisuallyHidden } from '@chakra-ui/react'
import styled from '@emotion/styled'
import type { Session } from 'next-auth'
import { useSession } from 'next-auth/client'
import type { FC } from 'react'
import Navigation from 'src/components/sections/Header/Navigation'
import { createBrandLogoIcon } from 'src/utils/createBrandIcons'

const StickyFlex = styled(chakra.header)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Header: FC = ({ ...props }) => {
  const [session] = useSession()
  const bg = useColorModeValue('white', 'brand.700')
  const mobileNav = useDisclosure()
  const iconColor = useColorModeValue('brand.500', 'white')

  const BrandLogoIcon = createBrandLogoIcon(iconColor)

  return (
    <StickyFlex
      bg={bg}
      w="100%"
      px={{ base: 2, sm: 4, lg: 8 }}
      py={4}
      boxShadow="md"
      zIndex={20}
      top="0"
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      {...props}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex align="center">
          <chakra.a href="/" title="Home Page" display="flex" alignItems="center">
            <BrandLogoIcon w="16" h="16" />
            <VisuallyHidden>kicker</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="2xl" fontWeight="bold">
            kicker
          </chakra.h1>
        </Flex>
        <Navigation session={session as Session} disclosure={mobileNav} />
      </Flex>
    </StickyFlex>
  )
}

export default Header
