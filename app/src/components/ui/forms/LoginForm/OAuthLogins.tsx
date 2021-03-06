import { Stack } from '@chakra-ui/react'
import { AppProvider } from 'next-auth/providers'
import { FC } from 'react'
import ProviderButton from 'src/components/ui/forms/LoginForm/ProviderButton'

interface Props {
  providers: AppProvider[]
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
