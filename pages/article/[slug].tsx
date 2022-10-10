import NotionAPI from '../../libs/notion/api'
import { ArticleItem } from '../../libs/common/types'
import { toJSONString } from '../../libs/common/utils'
import { getPostData } from '../../libs/notion/getPostData'

const Article = ({ article }: any) => {
  return <>{toJSONString(article)}</>
}
export default Article

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '1' } }],
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const article = await NotionAPI.getSingleArticle(slug)
  return {
    props: {
      article,
    },
    revalidate: 10
  }
}
