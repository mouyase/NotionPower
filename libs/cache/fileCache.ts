import fs from 'fs'

const path = require('path')
const cacheInvalidSeconds = 10 * 1000 * 1000
const jsonFile = path.resolve('./data.json')

export async function getCache(key: string) {
  const exist = fs.existsSync(jsonFile)
  if (!exist) return null
  const data = await fs.readFileSync(jsonFile)
  let json = null
  if (!data) return null
  try {
    json = JSON.parse(String(data))
  } catch (error) {
    console.error('fileCache: 读取JSON缓存文件失败', error)
    return null
  }
  // 缓存超过有效期就作废
  const cacheValidTime = new Date(parseInt(json[key + '_expire_time']) + cacheInvalidSeconds)
  const currentTime = new Date()
  if (!cacheValidTime || cacheValidTime < currentTime) {
    return null
  }
  return json[key]
}

export async function setCache(key: string, data: any) {
  const exist = fs.existsSync(jsonFile)
  const json = exist ? JSON.parse(String(fs.readFileSync(jsonFile))) : {}
  json[key] = data
  json[key + '_expire_time'] = new Date().getTime()
  fs.writeFileSync(jsonFile, JSON.stringify(json))
}

export async function delCache(key: string) {
  const exist = fs.existsSync(jsonFile)
  const json = exist ? JSON.parse(String(fs.readFileSync(jsonFile))) : {}
  delete json.key
  json[key + '_expire_time'] = new Date().getTime()
  fs.writeFileSync(jsonFile, JSON.stringify(json))
}

export default { getCache, setCache, delCache }
