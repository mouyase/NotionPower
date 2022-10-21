import type { NextPage } from 'next'
import NotionAPI from '../libs/notion/api'
import { Article } from '../libs/common/types'
import { toJSONString } from '../libs/common/utils'

interface IIndexPageProp {
  articleList: Article[]
}

const IndexPage: NextPage<IIndexPageProp> = (props: IIndexPageProp) => {
  const { articleList } = props
  console.log(articleList)
  return (
    <div>
      {toJSONString(articleList)}
      {articleList.map((item: Article) => (
        <div key={item.id} className="p-4">
          <a href={`/article/${item.slug ? item.slug : item.id}`}>
            {item.title}
          </a>
        </div>
      ))}
      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
        <div className="flex-shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export async function getStaticProps() {
  const articleList = await NotionAPI.getArticleList()
  return {
    props: {
      articleList
    },
    revalidate: 1
  }
}
