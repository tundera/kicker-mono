import { FC } from 'react'

import {
  Flex,
  useColorModeValue,
  Tab,
  Tabs,
  TabList,
  Spacer,
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react'
import { Search } from 'react-feather'

const Subheader: FC = ({ ...props }) => {
  const bg = useColorModeValue('indigo.500', 'gray.200')
  const color = useColorModeValue('whiteAlpha.900', 'indigo.500')
  const borderColor = useColorModeValue('gray.700', 'indigo.500')
  const selectedBg = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mx={2}
      borderBottomColor={borderColor}
      borderBottomWidth="2px"
      overflowX="auto"
      bg={bg}
      color={color}
      w="full"
    >
      <Tabs defaultIndex={0} variant="unstyled">
        <TabList>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Basic
          </Tab>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Profile
          </Tab>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Integrations
          </Tab>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Notifications
          </Tab>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Billing
          </Tab>
          <Tab
            py={4}
            m={0}
            _selected={{ color: bg, bg: selectedBg }}
            _focus={{ boxShadow: 'none' }}
            fontWeight="bold"
            fontSize="sm"
          >
            Advanced
          </Tab>
        </TabList>
      </Tabs>
      <Spacer />
      <HStack spacing={3} alignItems="center">
        <InputGroup display={{ base: 'none', lg: 'block' }} ml="auto">
          <InputLeftElement pointerEvents="none" children={<Search size="20" />} />
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
      </HStack>
    </Flex>
  )
}

export default Subheader
