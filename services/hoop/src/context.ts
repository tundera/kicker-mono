import db from '../db'
import { Context } from './types'

export const createContext = (ctx: any): Context => {
  return {
    ...ctx,
    db,
  }
}
