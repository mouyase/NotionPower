import notion from './index'
import configs from './configs'
import { log } from '../common/log'

export async function getDatabaseData() {
  const res = await notion.databases.query({
    database_id: configs.DATABASE_ID
  })
  log('获取数据库', configs.DATABASE_ID)
  return res
}
