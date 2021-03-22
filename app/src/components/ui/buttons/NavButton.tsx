import { FC } from 'react'

import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

interface Props {
  to: string
}

const NavButton: FC<Props> = ({ to, children }) => {
  return (
    <NextLink href={to} passHref>
      <Button as="a" variant="ghost" w="100%">
        {children}
      </Button>
    </NextLink>
  )
}

export default NavButton

export type { Props as NavButtonProps }
