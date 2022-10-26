const ArticleCover = (props: any) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white shadow-xl">
      <img
        src="/cover.webp"
        className="h-56 w-full rounded-t-lg object-cover"
      ></img>
      <div className="p-5">
        <div className="flex w-full flex-col text-2xl">据说是标题</div>
        <div className="mt-2 mb-2">aasjdkljalskdjl</div>
      </div>
    </div>
  )
}
export default ArticleCover
