import { FC, ReactNode } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

interface Props {
  header: ReactNode
  main: ReactNode
  nav: ReactNode
  ads: ReactNode
  footer: ReactNode
}

export const HolyGrailGrid: FC<Props> = ({ header, main, nav, ads, footer }) => {
  return (
    <Grid
      minH="100vh"
      templateAreas={{
        base: '"header" "nav" "main" "ads" "footer"',
        sm: '"header header header" "nav main ads" "footer footer footer"',
      }}
      templateColumns={{ base: '1fr', sm: '64px 1fr 64px' }}
      templateRows={{ base: 'min-content min-content 1fr min-content min-content', sm: 'min-content 1fr min-content' }}
    >
      <GridItem gridArea="header">{header}</GridItem>
      <GridItem gridArea="main">{main}</GridItem>
      <GridItem gridArea="nav">{nav}</GridItem>
      <GridItem gridArea="ads">{ads}</GridItem>
      <GridItem gridArea="footer">{footer}</GridItem>
    </Grid>
  )
}

export type { Props as HolyGrailGridProps }
