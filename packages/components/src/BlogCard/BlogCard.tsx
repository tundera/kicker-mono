import NextLink from 'next/link'
import { useColorModeValue, Box, LinkBox, LinkOverlay, Image, Text } from '@chakra-ui/react'

export interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  image: {
    alt: string
    src: string
  }
}
export const BlogCard = ({ title, excerpt, image }: BlogCardProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.800', 'white')
  const excerptColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box overflow="hidden" shadow="lg" rounded="lg" minH="90" w={{ base: '60', md: '80' }} cursor="pointer" m="auto">
      <LinkBox as="article" w="full" h="full" display="block">
        <Image alt={image.alt} src={image.src} maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" p="4">
          <NextLink href="#" passHref>
            <LinkOverlay>
              <Text color="indigo.500" fontSize="md" fontWeight="md"></Text>
              <Text color={titleColor} fontSize="xl" fontWeight="md" mb="2">
                {title}
              </Text>
              <Text color={excerptColor} fontWeight="light" fontSize="md">
                {excerpt}
              </Text>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}
