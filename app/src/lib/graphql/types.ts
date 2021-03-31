import type { PrismaClient } from 'db'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Context {
  db: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}
