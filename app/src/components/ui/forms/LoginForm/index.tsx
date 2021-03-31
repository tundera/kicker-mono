import { Box, Divider, Flex, Stack, Text,useColorModeValue } from '@chakra-ui/react'
import { AppProvider } from 'next-auth/providers'
import { FC } from 'react'
import EmailLogin from './EmailLogin'
import OAuthLogins from './OAuthLogins'

interface Props {
  providers: AppProvider[]
}

const LoginForm: FC<Props> = ({ providers }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'white')

  const oauthProviders = Object.values(providers).filter(
    (provider) => provider.id !== 'email' && provider.id !== 'credentials',
  )

  return (
    <Flex
      direction="column"
      w="full"
      bg={bg}
      maxW="md"
      px={{ base: '4', sm: '6', md: '8', lg: '10' }}
      py="8"
      shadow="base"
      rounded="lg"
    >
      <Box
        alignSelf="center"
        mb="6"
        color={textColor}
        fontSize={{ base: 'xl', sm: '2xl' }}
        fontWeight="light"
      >
        Login To Your Account
      </Box>
      <Stack w="full" spacing="4">
        <EmailLogin />
        <Divider />
        <Text textAlign="center" fontWeight="light" fontSize="medium" color="gray.600">
          Sign in using OAuth
        </Text>
        <OAuthLogins providers={oauthProviders} />
      </Stack>
    </Flex>
  )
}

export default LoginForm
