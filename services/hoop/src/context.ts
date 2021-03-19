import { Context } from './types'
import db from '../db'

export const createContext = (ctx: any): Context => {
  return {
    ...ctx,
    db,
  }
}
