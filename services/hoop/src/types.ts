import { PrismaClient } from '@prisma/client'

export * from './generated/nexus'
export * from '../db/types'

export interface Context {
  db: PrismaClient
}

export interface ServerConfig {
  port: number | undefined
}
