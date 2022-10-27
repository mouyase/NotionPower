import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Side from './components/Side'
import UserInfo from './components/UserInfo'
import ArticleList from './components/ArticleList'
import { Article } from '@/libs/common/type'

interface IProps {
  type: 'index' | 'article' | 'post'
  articleList?: Article[]
}

const LayoutBase = (props: IProps) => {
  const { type, articleList } = props
  return (
    <>
      <Navigation />
      <div className="flex w-screen justify-center bg-gray-100 p-8">
        <div className="container flex">
          <Side className="w-72 flex-shrink-0">
            <UserInfo></UserInfo>
          </Side>
          {type === 'index' && (
            <ArticleList articleList={articleList}></ArticleList>
          )}
          <Side className="w-72 flex-shrink-0"></Side>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default LayoutBase
