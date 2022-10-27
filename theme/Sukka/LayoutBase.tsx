import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Side from './components/Side'
import UserInfo from './components/UserInfo'
import ArticleList from './components/ArticleList'
import { IArticle } from '@/libs/common/type'
import Article from './components/Article'

interface IProps {
  type: 'index' | 'article' | 'post'
  article?: IArticle
  articleList?: IArticle[]
}

const LayoutBase = (props: IProps) => {
  const { type, article, articleList } = props
  return (
    <>
      <Navigation />
      <div className="flex w-screen justify-center bg-gray-100 p-8">
        <div className="container flex">
          <Side className="w-72 flex-shrink-0">
            <UserInfo></UserInfo>
          </Side>
          <div className="w-full pl-5 pr-5">
            {type === 'index' && articleList && (
              <ArticleList articleList={articleList}></ArticleList>
            )}
            {type === 'article' && article && (
              <Article article={article}></Article>
            )}
          </div>
          <Side className="w-72 flex-shrink-0"></Side>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default LayoutBase
