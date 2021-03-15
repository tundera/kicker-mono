import { FC } from 'react'
import { SessionProvider } from 'next-auth/client'
import { Stack } from '@chakra-ui/react'

import ProviderButton from '@components/ui/forms/LoginForm/ProviderButton'

interface Props {
  providers: SessionProvider[]
}

const OAuthLogins: FC<Props> = ({ providers }) => {
  return (
    <Stack spacing="2">
      {providers.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </Stack>
  )
}

export default OAuthLogins

export type { Props as OAuthLoginsProps }
