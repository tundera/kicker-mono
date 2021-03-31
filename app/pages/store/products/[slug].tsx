import { Box, Button, Flex, Grid, GridItem, Heading,Text } from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js'
import { gql } from 'graphql-request'
import type { GetStaticPaths,GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { getLayout } from 'src/components/layouts/SiteLayout'
import { graphCmsClient } from 'src/lib/graphcms/client'
import { formatCurrencyValue } from 'src/lib/graphcms/helpers'
import type { CustomNextPage } from 'types'

interface Props {
  product: any
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await graphCmsClient.request(
    gql`
      {
        products {
          name
          slug
        }
      }
    `,
  )
  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageSlug = params?.slug as string

  const { product } = await graphCmsClient.request(
    gql`
      query ProductPageQuery($slug: String!) {
        product(where: { slug: $slug }) {
          description
          name
          slug
          price
          images {
            id
            url
            width
            height
          }
        }
      }
    `,
    {
      slug: pageSlug,
    },
  )
  return {
    props: {
      product: {
        ...product,
        formattedPrice: formatCurrencyValue({ value: product.price }),
      },
    },
  }
}

const PayBtn = ({ formattedPrice, slug }) => {
  const [working, setWorking] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()
    const stripe = await stripePromise

    setWorking(true)

    // create checkout session
    const session = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug: slug,
      }),
    }).then((resp) => resp.json())

    await stripe?.redirectToCheckout({
      sessionId: session.id,
    })

    setWorking(false)
  }

  return (
    <Button
      type="button"
      isLoading={working}
      loadingText="Working"
      alignItems="center"
      px="4"
      py="2"
      border="1px transparent"
      size="md"
      borderRadius="md"
      fontWeight="medium"
      boxShadow="sm"
      color="white"
      width={{ base: 'full', md: 'auto' }}
      bg="blue.600"
      _hover={{ bg: 'blue.700' }}
      _focus={{ boxShadow: '0 0 0 2px', opacity: '0.5' }}
      cursor={working ? 'not-allowed' : undefined}
      opacity={working ? '0.5' : undefined}
      onClick={handleClick}
      disabled={working}
    >
      Buy for {formattedPrice}
    </Button>
  )
}

const ProductPage: CustomNextPage<Props> = ({ product }) => {
  const [image] = product.images

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box borderBottomWidth="1px" py="4" my="2">
          <Heading as="h1" fontWeight="semibold" size="3xl">
            {product.name}
          </Heading>
        </Box>
        <Grid gap="6" templateColumns={{ md: '5' }}>
          <GridItem my="6" column={{ md: '2' }} pt={{ md: '16' }}>
            <Box>
              <Text>{product.description}</Text>
            </Box>
            <PayBtn {...product} />
          </GridItem>
          <GridItem column={{ md: '3' }} order={{ base: -9999, md: 9999 }}>
            <Image src={image.url} width={image.width} height={image.height} />
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

ProductPage.getLayout = getLayout

export default ProductPage
