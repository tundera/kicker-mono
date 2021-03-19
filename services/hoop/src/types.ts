import { PrismaClient } from '@prisma/client'

export * from '@prisma/client'
export * from './generated/nexus'

export interface Context {
  db: PrismaClient
}

export interface ServerConfig {
  port: number | undefined
}
