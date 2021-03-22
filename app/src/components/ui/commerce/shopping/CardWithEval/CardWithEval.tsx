import { FC } from 'react'

import NextLink from 'next/link'

import { Star } from 'react-feather'
import { Icon, LinkBox, LinkOverlay, Heading, Text, Box, Flex, Button } from '@chakra-ui/react'

interface Props {
  title: string
  description: string
  price: string
  slug: string
  bgImage: string
}

const CardWithEval: FC<Props> = ({ title, description, price, slug, bgImage }) => {
  return (
    <Flex maxW="md" bg="white" shadow="lg" rounded="lg" overflow="hidden">
      <Box w="33.333333%" bgSize="cover" bgImage={`url("${bgImage}")`} />
      <Box w="66.666667%" p="4">
        <LinkBox>
          <Heading as="h1" color="gray.900" fontWeight="bold" fontSize="2xl">
            <NextLink href={`/store/products/${slug}`} passHref>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>
          <Text mt="2" color="gray.600" fontSize="sm">
            {description}
          </Text>
        </LinkBox>
        <Flex align="center" mt="2">
          <Icon as={Star} w="5" h="5" fill="currentcolor" color="gray.700" />
          <Icon as={Star} w="5" h="5" fill="currentcolor" color="gray.700" />
          <Icon as={Star} w="5" h="5" fill="currentcolor" color="gray.700" />
          <Icon as={Star} w="5" h="5" fill="currentcolor" color="gray.500" />
          <Icon as={Star} w="5" h="5" fill="currentcolor" color="gray.500" />
        </Flex>
        <Flex align="center" justify="space-between" mt="3">
          <Heading as="h1" color="gray.700" fontWeight="bold" fontSize="xl">
            {price}
          </Heading>
          <Button
            px="3"
            py="2"
            bg="gray.800"
            color="white"
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            rounded="base"
          >
            Add to Card
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default CardWithEval

export type { Props as CardWithEvalProps }
