import notion from './index'
import { log } from '../common/log'

export async function getPostData(id: string) {
  const res: any = await notion.blocks.children.list({ block_id: id })
  log('获取页面', res.title)
  return res
}
