import { Box, Button,chakra, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

interface CtaWithDescriptionProps {
  title: string
  subtitle: string
  description: string
  link?: {
    href: string
    label: string
  }
}

const CtaWithDescription = ({ title, subtitle, description, link }: CtaWithDescriptionProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Box bg={bg}>
      <Box
        textAlign="center"
        w="full"
        mx="auto"
        py={{ base: '12', lg: '16' }}
        px={{ base: '4', sm: '6', lg: '8' }}
        zIndex="10"
      >
        <Heading as="h2" fontSize={{ base: '4xl', sm: '6xl' }} fontWeight="extrabold" color={color}>
          <chakra.span display="block">{title}</chakra.span>
          <chakra.span display="block" fontSize={{ base: '3xl', sm: '4xl' }} color="indigo.500">
            {subtitle}
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" maxW="md" mx="auto" color="gray.400">
          {description}
        </Text>
        {link && (
          <Flex justify="center" mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
            <Box mt="12" display="inline-flex" rounded="md" shadow="base">
              <NextLink href="/about" passHref>
                <Button
                  as="a"
                  href="https://github.com/tundera/kicker/README.md"
                  type="button"
                  color="white"
                  bg="indigo.600"
                  shadow="md"
                  transition="ease-in"
                  transitionDuration="200ms"
                  w="full"
                  textAlign="center"
                  fontSize="md"
                  fontWeight="semibold"
                  py="2"
                  px="4"
                  rounded="lg"
                  _hover={{ bg: 'indigo.700' }}
                >
                  Learn more
                </Button>
              </NextLink>
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default CtaWithDescription
