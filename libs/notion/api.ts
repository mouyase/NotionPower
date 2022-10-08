import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { getDatabaseData } from './getDatabaseData'

const getArticleList = async () => {
  const database: any = await getDatabaseData()
  console.log(database.results)
  return database.results.map((item: PageObjectResponse) => {
    const { id, created_time: createdTime, last_edited_time: modifyTime, cover, icon, properties } = item
    return {
      id,
      createdTime,
      modifyTime,
      cover,
      icon,
      properties
    }
  })
}
const NotionAPI = {
  getArticleList
}
export default NotionAPI
