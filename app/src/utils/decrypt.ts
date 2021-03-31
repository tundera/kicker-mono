import crypto from 'crypto'
import { encrypted } from 'graphcms-tokens.enc'

const algorithm = 'aes-128-cbc'
const decipherGraphCmsTokens = crypto.createDecipheriv(
  algorithm,
  process.env.GRAPH_CMS_ENCRYPTION_KEY as string,
  process.env.GRAPH_CMS_ENCRYPTION_IV as string,
)

export const getGraphCmsTokens = () => {
  let decrypted = decipherGraphCmsTokens.update(encrypted, 'base64', 'utf8')

  decrypted += decipherGraphCmsTokens.final('utf8')

  return JSON.parse(decrypted)
}
