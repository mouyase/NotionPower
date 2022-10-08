import notion from './index'
import { UserData } from './types'
import { log } from '../common/log'

export async function getUserData() {
  const res = await notion.users.list({})
  const user: any = res?.results?.find(item => item.type === 'person')
  const { id = '', name = '', avatar_url: avatar = '' } = user
  const userData: UserData = {
    id,
    name,
    avatar
  }
  log('获取用户', userData.name)
  return userData
}
