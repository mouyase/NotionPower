import type { NextPage } from 'next'
import NotionAPI from '../libs/notion/api'
import { ArticleItem } from '../libs/common/types'

const Index: NextPage = ({ articleList }: any) => {
  return (
    <div>
      {articleList.map((item: ArticleItem) => (
        <div key={item.id}>
          <a href={`/article/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const articleList = await NotionAPI.getArticleList()
  return {
    props: {
      articleList: articleList
    },
    revalidate: 1
  }
}
