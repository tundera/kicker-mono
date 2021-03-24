import { useColorModeValue, LinkBox, LinkOverlay, Box, Image, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface SimpleCardProps {
  title: string
  description: string
  price: string
  image: {
    url: string
    alt: string
  }
  href: string
}

export const SimpleCard = ({ title, description, price, image, href }: SimpleCardProps) => {
  const hoverBg = useColorModeValue('indigo.300', 'gray.400')

  return (
    <LinkBox as="article">
      <Box
        shadow="lg"
        rounded="2xl"
        w="64"
        minH="125px"
        p="4"
        bg="white"
        position="relative"
        overflow="hidden"
        transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
        transitionTimingFunction="ease-in"
        transitionDuration="200ms"
        _hover={{ bg: hoverBg }}
      >
        <Image alt={image.alt} src={image.url} position="absolute" right="-20" bottom="-8" h="40" w="40" mb="4" />
        <NextLink href={href} passHref>
          <Box w="66.666667%">
            <Text color="gray.800" fontSize="lg" fontWeight="medium" mb="2">
              <LinkOverlay>{title.toUpperCase()}</LinkOverlay>
            </Text>
            <Text color="gray.400" fontSize="xs">
              {description}
            </Text>
            <Text color="indigo.500" fontSize="xl" fontWeight="medium">
              {price}
            </Text>
          </Box>
        </NextLink>
      </Box>
    </LinkBox>
  )
}
