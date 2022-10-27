import notion from './index'
import { log } from '../common/log'

export async function getBlockData(id: string) {
  const res = await notion.blocks.children.list({ block_id: id })
  log('获取页面', id)
  return res
}
