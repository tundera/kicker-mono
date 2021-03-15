import { FC } from 'react'
import {
  chakra,
  Button,
  Box,
  Flex,
  Image,
  Text,
  Link,
  List,
  ListItem,
  Grid,
  GridItem,
} from '@chakra-ui/react'

export interface ColorfulCardProps {
  title: string
  description: string
  price: string
  image: {
    src: string
    alt: string
  }
}

const ColorfulCard: FC<ColorfulCardProps> = ({ title, description, image }) => {
  return (
    <Flex w="80" justify="center" align="center">
      <Box w="full" p="4">
        <Flex direction="column" justify="center" p="10" bg="white" rounded="lg" shadow="2xl">
          <Box>
            <Text fontSize="2xl" textTransform="uppercase" color="gray.900" fontWeight="bold">
              Puma Shoes
            </Text>
            <Text textTransform="uppercase" fontSize="sm" color="gray.400">
              The best shoes in the marketplace
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/tailwind/object/4.jpg"
              w="full"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Grid gap="10">
            <GridItem>
              <List display="flex" flexDirection="row" justifyContent="center" alignitems="center">
                <ListItem mr="4" _last={{ mr: '0' }}>
                  <chakra.span
                    display="block"
                    p="1"
                    borderWidth="2px"
                    borderColor="white"
                    rounded="full"
                    transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                    transitionTimingFunction="ease-in"
                    transitionDuration="300ms"
                    _hover={{ borderColor: 'gray.500' }}
                  >
                    <Link href="#blue" display="block" w="6" h="6" bg="blue.900" rounded="full" />
                  </chakra.span>
                </ListItem>
                <ListItem mr="4" _last={{ mr: '0' }}>
                  <chakra.span
                    display="block"
                    p="1"
                    borderWidth="2px"
                    borderColor="white"
                    rounded="full"
                    transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                    transitionTimingFunction="ease-in"
                    transitionDuration="300ms"
                    _hover={{ borderColor: 'gray.500' }}
                  >
                    <Link
                      href="#yellow"
                      display="block"
                      w="6"
                      h="6"
                      bg="yellow.500"
                      rounded="full"
                    />
                  </chakra.span>
                </ListItem>
                <ListItem mr="4" _last={{ mr: '0' }}>
                  <chakra.span
                    display="block"
                    p="1"
                    borderWidth="2px"
                    borderColor="white"
                    rounded="full"
                    transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                    transitionTimingFunction="ease-in"
                    transitionDuration="300ms"
                    _hover={{ borderColor: 'gray.500' }}
                  >
                    <Link href="#red" display="block" w="6" h="6" bg="red.500" rounded="full" />
                  </chakra.span>
                </ListItem>
                <ListItem mr="4" _last={{ mr: '0' }}>
                  <chakra.span
                    display="block"
                    p="1"
                    borderWidth="2px"
                    borderColor="white"
                    rounded="full"
                    transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                    transitionTimingFunction="ease-in"
                    transitionDuration="300ms"
                    _hover={{ borderColor: 'gray.500' }}
                  >
                    <Link href="#green" display="block" w="6" h="6" bg="green.500" rounded="full" />
                  </chakra.span>
                </ListItem>
              </List>
            </GridItem>
            <GridItem
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              color="gray.900"
            >
              <Text fontWeight="bold" fontSize="xl">
                65 $
              </Text>
              <chakra.button
                px="6"
                py="2"
                textTransform="uppercase"
                rounded="full"
                transition="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                transitionTimingFunction="ease-in"
                transitionDuration="200ms"
                borderWidth="2px"
                borderColor="gray.900"
                _hover={{ bg: 'gray.800', color: 'white' }}
                _focus={{ outline: 'none' }}
              >
                Add to cart
              </chakra.button>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ColorfulCard
