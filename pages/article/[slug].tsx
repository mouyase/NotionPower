import NotionAPI from '../../libs/notion/api'
import { Article } from '../../libs/common/types'
import { toJSONString } from '../../libs/common/utils'
import { getPostData } from '../../libs/notion/getPostData'
import { NextPage } from 'next'


interface IArticlePageProp {
  article: Article
}

const ArticlePage: NextPage<IArticlePageProp> = ({ article }: IArticlePageProp) => {
  return <>{toJSONString(article)}</>
}
export default ArticlePage

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
      article
    },
    revalidate: 10
  }
}
