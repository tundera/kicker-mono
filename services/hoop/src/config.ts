import { ServerConfig } from './types'

export const config: ServerConfig = {
  port: Number(process.env.PORT) ?? 4000,
}
