/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticProps } from 'next'
import type { CustomNextPage } from 'types'

import { useState } from 'react'
import { getLayout } from '@components/layouts/SiteLayout'
import { ProductsGrid } from '@tunderadev/components'
import { formatCurrencyValue } from '@lib/graphcms/helpers'
import { graphCmsClient } from '@lib/graphcms/client'
import { Search } from 'react-feather'

import {
  useColorModeValue,
  Stack,
  Grid,
  HStack,
  Input,
  Icon,
  Flex,
  GridItem,
  Text,
  Heading,
  Box,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'

interface Props {
  products: any
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphCmsClient.request(
    `
      {
        products {
          id
          images {
            id
            height
            url
            width
          }
          name
          price
          slug
        }
      }
    `,
  )

  return {
    props: {
      products: products.map((product) => ({
        ...product,
        formattedPrice: formatCurrencyValue({ value: product.price }),
      })),
    },
  }
}

const StorePage: CustomNextPage<Props> = ({ products }) => {
  const headingColor = useColorModeValue('black', 'white')
  const resultsColor = useColorModeValue('gray.600', 'gray.400')
  const iconColor = useColorModeValue('gray.400', 'gray.300')
  const borderColor = useColorModeValue('gray.300', 'gray.900')
  const searchColor = useColorModeValue('gray.900', 'gray.100')
  const searchBg = useColorModeValue('white', 'gray.800')

  const [searchValue, setSearchValue] = useState('')

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Stack spacing={8} maxW="container.xl">
          <Box w="full" bg="white" p="12" h="container.lg">
            <Flex align="flex-end" justify="space-between" mb="12">
              <Box>
                <Text fontSize="4xl" fontWeight="bold" color="gray.800" mb="4">
                  All products
                </Text>
                <Text fontSize="2xl" fontWeight="light" color="gray.400">
                  Check out some of my store products here.
                </Text>
              </Box>
              <Box textAlign="end">
                <HStack as="form" display="flex" w="full" maxW="sm" spacing="3">
                  <Box position="relative">
                    <Input
                      type="text"
                      color={searchColor}
                      bg={searchBg}
                      aria-label="Search products"
                      display="block"
                      w="full"
                      px="4"
                      py="2"
                      borderWidth="1px"
                      borderColor={borderColor}
                      rounded="md"
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search posts"
                      sx={{
                        '--tw-ring-opacity': '1',
                        '--tw-ring-color': 'rgba(99, 102, 241, var(--tw-ring-opacity))',
                        '--tw-ring-offset-width': '2px',
                        '--tw-ring-offset-color': '#ddd6fe',
                        '--tw-ring-offset-shadow':
                          'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                        '--tw-ring-shadow':
                          'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                      }}
                      _focus={{
                        outlineColor: 'var(--tw-ring-color)',
                        outline: '2px solid transparent',
                        outlineOffset: '2px',
                        borderColor: 'transparent',
                        boxShadow:
                          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                      }}
                      _placeholder={{ color: 'gray.400' }}
                    />
                    <Icon
                      as={Search}
                      fill="none"
                      stroke="currentColor"
                      position="absolute"
                      right="3"
                      top="3"
                      h="5"
                      w="5"
                      color={iconColor}
                    />
                  </Box>
                </HStack>
              </Box>
            </Flex>
            {!filteredProducts.length && (
              <Text color={resultsColor} mb="4">
                No products found.
              </Text>
            )}
            {filteredProducts && <ProductsGrid products={filteredProducts} />}
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

StorePage.getLayout = getLayout

export default StorePage

export type { Props as StorePageProps }
