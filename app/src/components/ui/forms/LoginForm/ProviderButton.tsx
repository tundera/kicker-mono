import { FC } from 'react'
import { AppProvider } from 'next-auth/providers'
import { signIn } from 'next-auth/client'
import { Button } from '@chakra-ui/react'

interface Props {
  provider: AppProvider
}

const ProviderButton: FC<Props> = ({ provider }) => {
  return (
    <Button
      w="full"
      py="2"
      px="4"
      my="2"
      bg="black"
      color="white"
      textAlign="center"
      fontSize="md"
      fontWeight="semibold"
      shadow="md"
      rounded="lg"
      transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
      transitionTimingFunction="ease-in"
      transitionDuration="200ms"
      _hover={{ bg: 'indigo.700' }}
      _active={{ bg: 'indigo.700' }}
      sx={{
        '--tw-ring-opacity': '1',
        '--tw-ring-color': 'rgba(139, 92, 246, var(--tw-ring-opacity))',
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
        boxShadow:
          'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
      }}
      onClick={() => {
        console.log(process.env.NEXT_PUBLIC_BASE_URL)
        return signIn(provider.id, { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
      }}
    >
      {provider.name}
    </Button>
  )
}

export default ProviderButton

export type { Props as ProviderLoginProps }
