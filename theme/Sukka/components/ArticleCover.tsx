import dayjs from 'dayjs'
import { Article } from '@/libs/common/type'

const ArticleCover = (props: { article: Article }) => {
  const { article } = props
  return (
    <div className="flex w-full flex-col rounded-lg bg-white shadow-xl">
      {article.cover && (
        <a
          className="cursor-pointer"
          href={`/article/${article.slug ? article.slug : article.id}`}
        >
          <picture>
            <source srcSet={article.cover} type="image/webp" />
            <img
              src={article.cover}
              className="h-56 w-full rounded-t-lg object-cover"
            ></img>
          </picture>
        </a>
      )}
      <div className="break-all p-5">
        <a
          className="cursor-pointer"
          href={`/article/${article.slug ? article.slug : article.id}`}
        >
          <div className="flex w-full flex-col text-2xl">{article.title}</div>
        </a>
        {article.summary && <div className="mt-2 mb-2">{article.summary}</div>}
        <div className="flex justify-between">
          <div className="text-gray-400">
            {dayjs(article.date).format('YYYY-MM-DD')}
          </div>
          <a
            className="link text-blue-400"
            href={`/article/${article.slug ? article.slug : article.id}`}
          >
            继续阅读
          </a>
        </div>
      </div>
    </div>
  )
}
export default ArticleCover
