import NotionAPI from '../../libs/notion/api'
import { Article } from '../../libs/common/type'
import { toJSONString } from '../../libs/common/utils'
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
  const article = await NotionAPI.getArticle(slug)
  return {
    props: {
      article
    },
    revalidate: 10
  }
}
