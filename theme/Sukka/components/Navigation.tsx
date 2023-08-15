import Link from 'next/link'

const Navigation = (props: any) => {
  return (
    <div className="relative flex h-14 w-screen justify-center bg-white shadow-md">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <Link href="/">
            <a className="cursor-pointer px-3 py-4 transition duration-200 hover:bg-gray-100">
              首页
            </a>
          </Link>
          <div className="p-4">友链</div>
          <div className="p-4">关于</div>
        </div>
        <div>{/*<div>rss</div>*/}</div>
      </div>
    </div>
  )
}
export default Navigation
