import { Box,Flex, Heading, Text } from '@chakra-ui/react'
import { gql } from 'graphql-request'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getLayout } from 'src/components/layouts/SiteLayout'
import OrderSummary from 'src/components/ui/commerce/OrderSummary'
import { graphCmsClient } from 'src/lib/graphcms/client'
import type { CustomNextPage } from 'types'

const SuccessPage: CustomNextPage = () => {
  const router = useRouter()
  const [order, setOrder] = useState<any>(null)
  const [working, setWorking] = useState(true)

  const stripeCheckoutId = router.query.id

  // Unable to fetch from draft content since unauthenticated on client
  // Needs Next.js data-fetching primitive with authenticated graphql-request client
  useEffect(() => {
    const fetchOrder = async () => {
      const {
        orders: [order],
      } = await graphCmsClient.request(
        gql`
          query FetchOrder($stripeCheckoutId: String!) {
            orders(first: 1, where: { stripeCheckoutId: $stripeCheckoutId }) {
              id
              orderItems {
                id
                product {
                  images {
                    id
                    height
                    url
                    width
                  }
                  name
                }
                quantity
                total
              }
              total
            }
          }
        `,
        { stripeCheckoutId },
      )

      setOrder(order)
      setWorking(false)
    }
    if (stripeCheckoutId) fetchOrder()
  }, [stripeCheckoutId])

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box as="article">
          <Box borderBottomWidth="1px" py="4" my="2">
            <Heading as="h1" fontWeight="semibold" size="3xl">
              Your order
            </Heading>
            {order && (
              <Text color="gray.500" size="sm">
                {order?.id}
              </Text>
            )}
          </Box>
          <OrderSummary order={order} working={working} />
        </Box>
      </Flex>
    </>
  )
}

SuccessPage.getLayout = getLayout

export default SuccessPage
