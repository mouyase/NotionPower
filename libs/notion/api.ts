import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cache from '../cache'
import { getDatabaseData } from './getDatabaseData'
import { log } from '../common/log'

enum Type {
  TITLE = 'title',
  RICH_TEXT = 'rich_text',
  SELECT = 'select',
  MULTI_SELECT = 'multi_select',
  DATE = 'date'
}

const getDataByType = (value: any, type: string, contentType?: string) => {
  switch (value?.type) {
    case Type.TITLE:
    case Type.RICH_TEXT:
      if (contentType && value?.[type]?.[0]?.type === contentType) {
        return value[type][0][contentType].content
      }
      return undefined
    case Type.SELECT:
      return value[type]?.name
    case Type.MULTI_SELECT:
      return
    case Type.DATE:
      return value[type]?.start
  }
  return undefined
}

const getArticleList = async () => {
  const cacheData = await cache.get('database')
  let data
  if (cacheData) {
    log('命中缓存', cacheData)
    data = cacheData
  } else {
    const database: any = await getDatabaseData()
    await cache.set('database', database)
    data = database
  }
  return data.results.map((item: PageObjectResponse) => {
    const { id, created_time: createdTime, last_edited_time: modifyTime, cover, icon, properties } = item
    const { title, summary, slug, status, tags, type, category, date } = properties
    console.log(getDataByType(status, Type.SELECT))
    return {
      id,
      createdTime,
      modifyTime,
      cover,
      icon,
      title: getDataByType(title, Type.TITLE, 'text'),
      summary: getDataByType(summary, Type.RICH_TEXT, 'text'),
      slug: getDataByType(slug, Type.RICH_TEXT),
      status: getDataByType(status, Type.SELECT),
      tags: getDataByType(status, Type.SELECT),
      type: getDataByType(type, Type.MULTI_SELECT),
      category: getDataByType(category, Type.SELECT),
      date: getDataByType(date, Type.DATE)
    }
  })
}
const NotionAPI = {
  getArticleList
}
export default NotionAPI
