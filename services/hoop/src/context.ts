import db, { PrismaClient } from '../db'

export interface Context {
  db: PrismaClient
}

export const createContext = (ctx: any): Context => {
  return {
    ...ctx,
    db,
  }
}
