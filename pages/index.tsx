import type { NextPage } from 'next'
import NotionAPI from '../libs/notion/api'

const Index: NextPage = ({ res }: any) => {
  return (
    <div>
      {res}
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const res = await NotionAPI.getArticleList()
  return {
    props: {
      res: JSON.stringify(res)
    },
    revalidate: 1
  }
}
