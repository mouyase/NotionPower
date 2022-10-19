import type {NextPage} from 'next'
import NotionAPI from '../libs/notion/api'
import {Article} from '../libs/common/types'
import {toJSONString} from '../libs/common/utils'

interface IIndexProp {
    articleList: Article[]
}

const Index: NextPage = ({articleList}: any) => {
    return (
        <div>
            {toJSONString(articleList)}
            {articleList.map((item: Article) => (
                <div key={item.id}>
                    <a href={`/article/${item.slug ? item.slug : item.id}`}>
                        {item.title}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Index

export async function getStaticProps() {
    const articleList = await NotionAPI.getArticleList()
    return {
        props: {
            articleList
        },
        revalidate: 1
    }
}
