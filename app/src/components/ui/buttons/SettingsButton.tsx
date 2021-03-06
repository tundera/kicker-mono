import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'
import { FC } from 'react'
import { Settings } from 'react-feather'

const SettingsButton: FC = () => {
  const router = useRouter()
  const [session] = useSession()

  const color = useColorModeValue('brand.500', 'whiteAlpha.900')
  const bg = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverColor = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverBg = useColorModeValue('brand.800', 'whiteAlpha.900')

  return (
    <Menu>
      <Tooltip hasArrow label="Settings ⚙️">
        <MenuButton
          as={IconButton}
          aria-label={'Settings icon dropdown'}
          icon={<Settings size="20" />}
          size="sm"
          color={color}
          _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: hoverColor }}
          variant="ghost"
        />
      </Tooltip>

      <MenuList bg={bg}>
        <MenuGroup title="Settings">
          <MenuItem
            onClick={() => router.push('/dashboard')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Flex justify="space-between" w="full">
              <Text>Dashboard</Text>
              <Avatar
                size="sm"
                name={session?.user.name as string}
                src={session?.user.image as string}
              />
            </Flex>
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/account')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Text>Account</Text>
          </MenuItem>
          <MenuItem
            onClick={() => signOut()}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            <Text>Sign Out</Text>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default SettingsButton
