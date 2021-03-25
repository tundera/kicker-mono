import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'
export * from './generated/nexus'
export * from '../db/seeds/types'

export interface Context {
  db: PrismaClient
}

export interface ServerConfig {
  port: number | undefined
}
