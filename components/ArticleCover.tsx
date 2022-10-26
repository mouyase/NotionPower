import { Article } from '../libs/common/types'

const ArticleCover = (props: { article: Article }) => {
  const { article } = props
  return (
    <div className='flex w-full flex-col rounded-lg bg-white shadow-xl'>
      <img
        src='/cover.webp'
        className='h-56 w-full rounded-t-lg object-cover'
      ></img>
      <div className='p-5 break-all'>
        <div className='flex w-full flex-col text-2xl'>{article.title}</div>
        <div className='mt-2 mb-2'>{article.summary}</div>
        <div className='flex justify-between'>
          <div className='text-gray-400'>{article.createdTime}</div>
          <a className='text-blue-400 link' href="#">继续阅读</a>
        </div>
      </div>
    </div>
  )
}
export default ArticleCover
