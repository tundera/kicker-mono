import { FC } from 'react'
import { Session, signOut } from 'next-auth/client'

import NextLink from 'next/link'
import { Menu } from 'react-feather'
import {
  useColorModeValue,
  Slide,
  useDisclosure,
  HStack,
  Box,
  IconButton,
  Button,
  VStack,
  CloseButton,
} from '@chakra-ui/react'

import SettingsButton from '@components/ui/buttons/SettingsButton'
import NavButton from '@components/ui/buttons/NavButton'
import DarkModeToggle from '@components/utility/DarkModeToggle'
import LocaleButton from '@components/utility/LocaleButton'

interface Props {
  session: Session
  disclosure: ReturnType<typeof useDisclosure>
}

const Navigation: FC<Props> = ({ session, disclosure }) => {
  const color = useColorModeValue('indigo.500', 'whiteAlpha.900')

  const bg = useColorModeValue('whiteAlpha.900', 'indigo.700')
  const iconColor = useColorModeValue('gray.800', 'inherit')

  return (
    <HStack display="flex" alignItems="center" spacing={1}>
      <HStack
        spacing={2}
        mr={1}
        color={useColorModeValue('indigo.500', 'whiteAlpha.900')}
        display={{ base: 'none', md: 'inline-flex' }}
      >
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/blog">Blog</NavButton>
        <NavButton to="/store">Store</NavButton>
      </HStack>
      <HStack
        spacing={1}
        mr={1}
        color={useColorModeValue('indigo.500', 'whiteAlpha.900')}
        display={{ base: 'none', md: 'inline-flex' }}
      >
        {session ? (
          <HStack spacing={3} display={disclosure.isOpen ? 'none' : 'flex'} alignItems="center">
            <SettingsButton />
            <DarkModeToggle />
            <LocaleButton />
          </HStack>
        ) : (
          <HStack spacing={3} alignItems="center">
            <NextLink href="/auth/signin" passHref>
              <Button as="a" color={color} variant="ghost" size="sm" fontSize="md">
                Sign In
              </Button>
            </NextLink>
            <DarkModeToggle />
            <LocaleButton />
          </HStack>
        )}
      </HStack>

      <Box display={{ base: 'inline-flex', md: 'none' }}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          fontSize="20px"
          color={iconColor}
          variant="ghost"
          icon={<Menu />}
          onClick={disclosure.onOpen}
        />
        <Slide direction="top" in={disclosure.isOpen} style={{ zIndex: 30 }}>
          <VStack
            top={0}
            left={0}
            right={0}
            display={disclosure.isOpen ? 'flex' : 'none'}
            flexDirection="column"
            py={4}
            px={8}
            bg={bg}
            spacing={3}
            borderRadius="sm"
            boxShadow="sm"
          >
            <CloseButton aria-label="Close menu" onClick={disclosure.onClose} />

            <NavButton to="/">Home</NavButton>
            <NavButton to="/about">About</NavButton>
            <NavButton to="/blog">Blog</NavButton>
            <NavButton to="/store">Store</NavButton>
            <NextLink href="/auth/signin" passHref>
              <Button as="a" w="100%" variant="ghost">
                Sign in
              </Button>
            </NextLink>

            <HStack>
              <DarkModeToggle />
              <LocaleButton />
            </HStack>
          </VStack>
        </Slide>
      </Box>
    </HStack>
  )
}

export default Navigation
