import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { signIn } from 'next-auth/client'
import { FC } from 'react'
import { Lock,Mail } from 'react-feather'
import { useForm } from 'react-hook-form'

interface Inputs {
  userId: string
  password: string
}

const CredentialsLogin: FC = () => {
  const linkColor = useColorModeValue('gray.500', 'gray.100')
  const linkHoverColor = useColorModeValue('gray.700', 'white')

  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateUserId(value) {
    if (!value) {
      return 'User ID is required'
    } else return true
  }

  function validatePassword(value) {
    if (!value) {
      return 'Password is required'
    } else return true
  }

  function onSubmit(data) {
    return signIn('credentials', {
      userId: data.userId,
      password: data.password,
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
    })
  }

  return (
    <form action="#" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" mb="2">
        <FormControl isInvalid={!!errors.userId}>
          <VisuallyHidden>
            <FormLabel htmlFor="userId">User ID</FormLabel>
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
              <Mail />
            </chakra.span>
            <Input
              type="text"
              id="sign-in-user-id"
              name="userId"
              ref={register({ validate: validateUserId })}
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
              placeholder="Your User ID"
              _placeholder={{ color: 'gray.400' }}
            />
          </Flex>
          {errors.userId && formState.touched.userId && (
            <Box display="flex" justifyContent="center">
              <FormErrorMessage>{errors.userId && errors.userId.message}</FormErrorMessage>
            </Box>
          )}
        </FormControl>
      </Flex>
      <Flex direction="column" mb="6">
        <FormControl isInvalid={!!errors.password}>
          <VisuallyHidden>
            <FormLabel htmlFor="password">Password</FormLabel>
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
              <Lock />
            </chakra.span>
            <Input
              type="password"
              id="sign-in-password"
              name="password"
              ref={register({ validate: validatePassword })}
              roundedRight="lg"
              roundedLeft="none"
              flex="1 1 0%"
              appearance="none"
              borderWidth="1px"
              borderColor="gray.300"
              w="full"
              py="2"
              px="4"
              fontSize="md"
              shadow="sm"
              color="gray.700"
              bg="white"
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
              placeholder="Your password"
              _placeholder={{ color: 'gray.400' }}
            />
          </Flex>
          {errors.password && formState.touched.password && (
            <Box display="flex" justifyContent="center">
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </Box>
          )}
        </FormControl>
      </Flex>
      <Flex alignItems="center" mb="6" mt="-4">
        <Flex ml="auto">
          <Link
            href="#"
            isExternal
            display="inline-flex"
            fontSize={{ base: 'xs', sm: 'sm' }}
            fontWeight="thin"
            color={linkColor}
            _hover={{ color: linkHoverColor }}
          >
            Forgot Your Password?
          </Link>
        </Flex>
      </Flex>
      <Flex w="full">
        <Button
          type="submit"
          w="full"
          py="2"
          px="4"
          bg="indigo.600"
          color="white"
          textAlign="center"
          fontSize="md"
          fontWeight="semibold"
          shadow="md"
          rounded="lg"
          transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
          transitionTimingFunction="ease-in"
          transitionDuration="200ms"
          isLoading={formState.isSubmitting}
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
          Login
        </Button>
      </Flex>
    </form>
  )
}

export default CredentialsLogin
