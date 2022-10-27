import { IArticle } from '@/libs/common/type'
import ArticleCover from './ArticleCover'

interface IArticleListProps {
  articleList: IArticle[]
}

const ArticleList = (props: IArticleListProps) => {
  const { articleList } = props
  return (
    <>
      {articleList?.map((article: IArticle, index: number) => (
        <div
          key={index}
          className={`${index !== articleList?.length ? 'mb-5' : ''}`}
        >
          <ArticleCover article={article}></ArticleCover>
        </div>
      ))}
    </>
  )
}
export default ArticleList
