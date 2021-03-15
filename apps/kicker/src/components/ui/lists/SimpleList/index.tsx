import { FC } from 'react'

// import NextLink from 'next/link'

import {
  useColorModeValue,
  Heading,
  Text,
  Image,
  Link,
  Box,
  Flex,
  List,
  ListItem,
  IconButton,
} from '@chakra-ui/react'
import { ChevronRight } from 'react-feather'

type ListItemType = {
  title: string
  label: string
  time: string
  image: {
    src: string
    alt: string
  }
  href?: string
}

interface Props {
  heading: string
  subheading: string
  items: ListItemType[]
}

const SimpleList: FC<Props> = ({ heading, subheading, items }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.900', 'white')
  const subheadingColor = useColorModeValue('gray.500', 'gray.200')
  const titleColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box mx="auto">
      <Flex
        direction="column"
        w="100%"
        maxW={{
          base: '7xl',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        mx="auto"
        align="center"
        justify="center"
        bg={bg}
        rounded="lg"
        shadow="base"
      >
        <Box px={{ base: '4', sm: '6' }} py="5" borderBottomWidth="1px" w="full">
          <Heading as="h3" fontSize="lg" lineHeight="6" fontWeight="medium" color={headingColor}>
            {heading}
          </Heading>
          <Text mt="1" maxW="2xl" fontSize="sm" color={subheadingColor}>
            {subheading}
          </Text>
        </Box>
        <List display="flex" flexDirection="column">
          {items.map(({ title, label, time, image, href }) => (
            <ListItem
              key={title}
              display="flex"
              flexDirection="row"
              borderBottomWidth="1px"
              borderColor="gray.300"
              _last={{ borderBottomWidth: '0' }}
            >
              <Flex userSelect="none" cursor="pointer" flex="1 1 0%" align="center" p="4">
                <Flex direction="column" w="10" h="10" justify="center" align="center" mr="4">
                  <Link href="#" display="block" position="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      mx="auto"
                      objectFit="cover"
                      rounded="full"
                      h="10"
                      w="10"
                    />
                  </Link>
                </Flex>
                <Box flex="1 1 0%" pl="1" mr="16">
                  <Box fontWeight="medium" color={titleColor}>
                    {title}
                  </Box>
                  <Box color={textColor} fontSize="sm">
                    {label}
                  </Box>
                </Box>
                <Box color={textColor} fontSize="xs">
                  {time}
                </Box>
                {href && (
                  <IconButton
                    ml="4"
                    icon={<ChevronRight size="20" />}
                    variant="ghost"
                    aria-label="Link button"
                    onClick={null}
                  />
                )}
              </Flex>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  )
}

export default SimpleList

export type { Props as SimpleListProps }
