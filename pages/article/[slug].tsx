import NotionAPI from '../../libs/notion/api'
import { ArticleItem } from '../../libs/common/types'
import { toJSONString } from '../../libs/common/utils'
import { getPostData } from '../../libs/notion/getPostData'

const Article = ({ articleProps,article }: any) => {
  return (<>{article}</>)
}
export default Article

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '1' } }],
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const articleList = await NotionAPI.getArticleList()
  const articleProps = articleList.find((item: ArticleItem) => item.slug === slug || item.id === slug)
  let article
  if (articleProps) {
    const a = await getPostData(articleProps.id)
     article = toJSONString(a)
  }
  return {
    props: {
      article,
      articleProps
    },
    revalidate: 10
  }
}
