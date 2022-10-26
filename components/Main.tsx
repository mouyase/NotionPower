import { Article } from '../libs/common/types'
import ArticleCover from './ArticleCover'

const Main = (props: any) => {
  const { articleList } = props
  return (
    <div className='pl-5 pr-5 w-full'>
      {articleList?.map((article: Article, index: number) => (
        <div key={index} className={`${index !== articleList?.length ? 'mb-5' : ''}`}>
          <ArticleCover article={article}></ArticleCover>
        </div>
      ))}
    </div>
  )
}
export default Main
