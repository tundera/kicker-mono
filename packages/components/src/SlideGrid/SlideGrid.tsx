import { Box, Grid, GridItem, Text,useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const GridBox = styled(GridItem)`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SlideGrid = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bg} p="8" borderRadius="4" shadow="dark-lg" w="full">
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap="4">
        <GridBox bgColor="blue.400">
          <Text fontSize="4xl" color="white">
            1
          </Text>
        </GridBox>
        <GridBox bgColor="purple.400">
          <Text fontSize="4xl" color="white">
            2
          </Text>
        </GridBox>
        <GridBox bgColor="red.400">
          <Text fontSize="4xl" color="white">
            3
          </Text>
        </GridBox>
        <GridBox bgColor="yellow.400">
          <Text fontSize="4xl" color="white">
            4
          </Text>
        </GridBox>
        <GridBox bgColor="green.400">
          <Text fontSize="4xl" color="white">
            5
          </Text>
        </GridBox>
      </Grid>
    </Box>
  )
}
