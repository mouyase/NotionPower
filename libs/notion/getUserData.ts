import notion from './index'
import { log } from '../common/log'
import { IUserData } from '../common/type'

export async function getUserData() {
  const res = await notion.users.list({})
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
