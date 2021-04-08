import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VisuallyHidden,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/client'
import { FC } from 'react'
import { Mail } from 'react-feather'
import { useForm } from 'react-hook-form'

interface Inputs {
  email: string
}

const EmailLogin: FC = () => {
  const { handleSubmit, register, formState } = useForm<Inputs>()

  function validateEmail(value) {
    if (!value) {
      return 'Email is required'
    } else return true
  }

  function onSubmit(data) {
    return signIn('email', { email: data.email, callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
  }

  return (
    <form
      method="post"
      action="/api/auth/signin/email"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex direction="column" mb="2">
        <FormControl isInvalid={!!formState.errors.email}>
          <VisuallyHidden>
            <FormLabel htmlFor="email">Email Address</FormLabel>
          </VisuallyHidden>
          <Flex position="relative">
            <chakra.span
              roundedLeft="md"
              display="inline-flex"
              alignItems="center"
              px="3"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderLeftWidth="1px"
              borderColor="gray.300"
              bg="white"
              color="gray.500"
              shadow="sm"
              fontSize="sm"
            >
              <Mail size="20" />
            </chakra.span>
            <Input
              type="text"
              id="sign-in-email"
              roundedRight="lg"
              roundedLeft="none"
              flex="1 1 0%"
              appearance="none"
              borderWidth="1px"
              borderColor="gray.300"
              w="full"
              py="2"
              px="4"
              bg="white"
              color="gray.700"
              shadow="sm"
              fontSize="md"
              sx={{
                '--tw-ring-opacity': '1',
                '--tw-ring-color': 'rgba(124, 58, 237, var(--tw-ring-opacity))',
                '--tw-ring-offset-width': '2px',
                '--tw-ring-offset-color': '#ddd6fe',
                '--tw-ring-offset-shadow':
                  'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow':
                  'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
              }}
              _focus={{
                outlineColor: 'var(--tw-ring-color)',
                outline: '2px solid var(--tw-ring-color)',
                borderColor: 'transparent',
                boxShadow:
                  'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              }}
              placeholder="Your email"
              _placeholder={{ color: 'gray.400' }}
              {...register('email', { validate: validateEmail })}
            />
          </Flex>
          {formState.errors.email && formState.touchedFields.email && (
            <Box display="flex" justifyContent="center">
              <FormErrorMessage>
                {formState.errors.email && formState.errors.email.message}
              </FormErrorMessage>
            </Box>
          )}
        </FormControl>
      </Flex>
      <Flex w="full">
        <Button
          type="submit"
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
        >
          Sign in with email
        </Button>
      </Flex>
    </form>
  )
}

export default EmailLogin
