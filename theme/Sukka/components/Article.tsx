import dayjs from 'dayjs'
import { IArticle } from '@/libs/common/type'
import Link from 'next/link'

interface IArticleProps {
  article: IArticle
}

const Article = (props: IArticleProps) => {
  const { article } = props
  const url = `/article/${article.slug ? article.slug : article.id}`
  return (
    <div className="flex w-full flex-col rounded-lg bg-white shadow-xl">
      {article.cover && (
        <Link href={url}>
          <a className="cursor-pointer" href={url}>
            <picture>
              <source srcSet={article.cover} type="image/webp" />
              <img
                src={article.cover}
                className="h-56 w-full rounded-t-lg object-cover"
              ></img>
            </picture>
          </a>
        </Link>
      )}
      <div className="break-all p-5">
        <Link href={url}>
          <a
            className="cursor-pointer"
            href={`/article/${article.slug ? article.slug : article.id}`}
          >
            <div className="flex w-full flex-col text-2xl">{article.title}</div>
          </a>
        </Link>
        <div className="mt-2 flex">
          <div className="text-gray-400">
            {dayjs(article.date).format('YYYY-MM-DD')}
          </div>
        </div>
        {JSON.stringify(article)}
      </div>
    </div>
  )
}
export default Article
