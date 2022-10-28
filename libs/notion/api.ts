import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cache from '../cache'
import { getDatabaseData } from './client'
import { log } from '../common/log'
import { IArticle } from '../common/type'
import { toJSONObject } from '../common/utils'
import { getBlockData } from './client'

enum Type {
  TEXT = 'text',
  TITLE = 'title',
  RICH_TEXT = 'rich_text',
  SELECT = 'select',
  MULTI_SELECT = 'multi_select',
  DATE = 'date',
  EXTERNAL = 'external',
  EMOJI = 'emoji'
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
      return value[type].map((item: any) => item.name)
    case Type.DATE:
      return value[type]?.start
    case Type.EXTERNAL:
      return value[type]?.url
    case Type.EMOJI:
      return value[type]
  }
  return undefined
}

const getAllArticle = async (): Promise<IArticle[]> => {
  const data = await getDatabase()
  return data.results.map((item: PageObjectResponse) => {
    const {
      id,
      created_time: createdTime,
      last_edited_time: modifyTime,
      cover,
      icon,
      properties
    } = item
    const { title, summary, slug, status, tags, type, category, date } =
      properties
    return toJSONObject({
      id,
      createdTime,
      modifyTime,
      cover: getDataByType(cover, Type.EXTERNAL),
      icon: getDataByType(icon, Type.EMOJI),
      title: getDataByType(title, Type.TITLE, Type.TEXT),
      summary: getDataByType(summary, Type.RICH_TEXT, Type.TEXT),
      slug: getDataByType(slug, Type.RICH_TEXT, Type.TEXT),
      status: getDataByType(status, Type.SELECT),
      tags: getDataByType(tags, Type.MULTI_SELECT),
      type: getDataByType(type, Type.SELECT),
      category: getDataByType(category, Type.SELECT),
      date: getDataByType(date, Type.DATE)
    })
  })
}
const getDatabase = async () => {
  const cacheData = await cache.get('database')
  if (cacheData) {
    log('命中缓存', '数据库')
    return cacheData
  } else {
    const database: any = await getDatabaseData()
    await cache.set('database', database)
    return database
  }
}
const getArticle = async (slug: string) => {
  const data = await getAllArticle()
  const articleProps = data.find(
    (item: IArticle) => item.slug === slug || item.id === slug
  )
  if (articleProps) {
    const article = await getBlockData(articleProps.id)
    return toJSONObject({
      ...articleProps,
      article
    })
  }
}

const getArticleListWithPage = async (pageSize: number, pageNumber: number) => {
  const data = await getAllArticle()
  let offset = (pageNumber - 1) * pageSize
  return offset + pageSize >= data.length
    ? data.slice(offset, data.length)
    : data.slice(offset, offset + pageSize)
}

const NotionAPI = {
  getAllArticle,
  getArticle,
  getArticleListWithPage
}
export default NotionAPI
