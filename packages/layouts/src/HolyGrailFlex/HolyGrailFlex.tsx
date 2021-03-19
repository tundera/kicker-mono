import { FC, ReactNode } from 'react'
import { Flex, Box } from '@chakra-ui/react'

interface Props {
  header: ReactNode
  main: ReactNode
  nav: ReactNode
  ads: ReactNode
  footer: ReactNode
}

export const HolyGrailFlex: FC<Props> = ({ header, main, nav, ads, footer }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Box>{header}</Box>
      <Flex flex="1 1 0%" direction={{ base: 'column', sm: 'row' }}>
        <Box flex="1 1 0%" minW="0">
          {main}
        </Box>
        <Box flexBasis={{ base: 'auto', sm: '16' }} order="revert">
          {nav}
        </Box>
        <Box flexBasis={{ base: 'auto', sm: '16' }}>{ads}</Box>
      </Flex>
      <Box>{footer}</Box>
    </Flex>
  )
}

export type { Props as HolyGrailFlexProps }
