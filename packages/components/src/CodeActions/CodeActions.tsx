import { Box, Flex, useClipboard,useColorModeValue } from '@chakra-ui/react'
import type { FC } from 'react'
import Confetti from 'react-dom-confetti'
import { IoIosCopy } from 'react-icons/io'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import confettiConfig from '../animations/confetti'
import { ActionButton } from './ActionButton'

interface Props {
  code: string
}

export const CodeActions: FC<Props> = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Flex
      justifyContent="end"
      w="full"
      bg={useColorModeValue('brand.100', 'gray.700')}
      roundedBottom="lg"
      px={5}
      py={1}
    >
      <Box as={Confetti} active={hasCopied} config={confettiConfig} zIndex="tooltip" />
      <Box color={hasCopied ? 'green.500' : undefined}>
        <ActionButton
          icon={hasCopied ? <IoCheckmarkDoneSharp /> : <IoIosCopy />}
          onClick={onCopy}
          label={hasCopied ? 'Copied!' : 'Copy Original Code'}
        />
      </Box>
    </Flex>
  )
}
