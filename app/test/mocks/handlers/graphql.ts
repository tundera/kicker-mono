import { graphql } from 'msw'

interface Variables {
  username: string
}

interface Response {
  user: User
}

interface User {
  username: string
  firstName: string
}

export default [
  graphql.mutation<Response, Variables>('Login', (req, res, ctx) => {
    const { username } = req.variables
    return res(
      ctx.data({
        user: {
          username,
          firstName: 'John',
        },
      }),
    )
  }),
]
