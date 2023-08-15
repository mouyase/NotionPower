import LayoutBase from '@/theme/Sukka/LayoutBase'
import { IArticleProps } from '@/theme/type'

const LayoutArticle = (props: IArticleProps) => {
  const { article } = props
  return <LayoutBase type="article" article={article}></LayoutBase>
}
export default LayoutArticle
