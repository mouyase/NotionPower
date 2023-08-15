import NotionAPI from '../../libs/notion/api'
import useThemeComponents from '@/libs/hooks/useThemeComponents'
import { NextPage } from 'next'

const ArticlePage: NextPage = props => {
  const { LayoutArticle } = useThemeComponents()
  return <LayoutArticle {...props}></LayoutArticle>
}
export default ArticlePage

export async function getStaticPaths() {
  const allArticle = await NotionAPI.getAllArticle()
  const paths = allArticle.map(item => {
    return { params: { slug: item.slug ? item.slug : item.id } }
  })
  return {
    paths,
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
