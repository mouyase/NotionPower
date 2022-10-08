import { Client } from '@notionhq/client'
import configs from './configs'

export default new Client({
  auth: configs.AUTH_TOKEN
})
