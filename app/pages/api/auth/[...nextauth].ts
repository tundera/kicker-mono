import db from 'db'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    pages: {
      signIn: '/auth/signin',
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      }),
      Providers.Email({
        server: {
          host: process.env.SMTP_HOST as string,
          port: Number(process.env.SMTP_PORT as string),
          auth: {
            user: process.env.SMTP_USER as string,
            pass: process.env.SMTP_PASSWORD as string,
          },
        },
        from: process.env.SMTP_FROM, // The "from" address that you want to use
      }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma: db }),
    secret: process.env.PRISMA_SECRET,
  })
