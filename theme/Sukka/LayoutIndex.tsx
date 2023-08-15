import LayoutBase from './LayoutBase'
import { IIndexProps } from '../type'

const LayoutIndex = (props: IIndexProps) => {
  const { articleList } = props
  return <LayoutBase type="index" articleList={articleList}></LayoutBase>
}
export default LayoutIndex
