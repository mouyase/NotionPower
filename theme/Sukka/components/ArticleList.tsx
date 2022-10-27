import { Article } from '@/libs/common/type'
import ArticleCover from './ArticleCover'

const ArticleList = (props: any) => {
  const { articleList } = props
  return (
    <div className="w-full pl-5 pr-5">
      {articleList?.map((article: Article, index: number) => (
        <div
          key={index}
          className={`${index !== articleList?.length ? 'mb-5' : ''}`}
        >
          <ArticleCover article={article}></ArticleCover>
        </div>
      ))}
    </div>
  )
}
export default ArticleList
