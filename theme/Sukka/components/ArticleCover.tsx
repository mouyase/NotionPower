import dayjs from 'dayjs'
import { IArticle } from '@/libs/common/type'
import Link from 'next/link'

interface IArticleCoverProps {
  article: IArticle
}

const ArticleCover = (props: IArticleCoverProps) => {
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
          <a className="cursor-pointer">
            <div className="flex w-full flex-col text-2xl">{article.title}</div>
          </a>
        </Link>
        {article.summary && <div className="mt-2">{article.summary}</div>}
        <div className="mt-2 flex justify-between">
          <div className="text-gray-400">
            {dayjs(article.date).format('YYYY-MM-DD')}
          </div>
          <Link href={url}>
            <a className="link text-blue-400" href={url}>
              继续阅读
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ArticleCover
