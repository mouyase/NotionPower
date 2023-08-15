import { Client } from '@notionhq/client'
import configs from './configs'
import { log } from '@/libs/common/log'
import { IUserData } from '@/libs/common/type'

const client = new Client({
  auth: configs.AUTH_TOKEN
})

export async function getBlockData(id: string) {
  const res = await client.blocks.children.list({ block_id: id })
  log('获取页面', id)
  return res
}

export async function getDatabaseData() {
  const res = await client.databases.query({
    database_id: configs.DATABASE_ID
  })
  log('获取数据库', configs.DATABASE_ID)
  return res
}

export async function getUserData() {
  const res = await client.users.list({})
  const user: any = res?.results?.find(item => item.type === 'person')
  const { id = '', name = '', avatar_url: avatar = '' } = user
  const userData: IUserData = {
    id,
    name,
    avatar
  }
  log('获取用户', userData.name)
  return userData
}
