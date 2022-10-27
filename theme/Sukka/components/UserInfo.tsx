const UserInfo = (props: any) => {
  return (
    <div className="flex w-full flex-col items-center rounded-lg bg-white p-8 shadow-xl">
      <picture>
        <source
          srcSet="https://s3-us-west-2.amazonaws.com/public.notion-static.com/d9a1f6e9-e490-4719-8c36-f49ed35adbcf/.jpg"
          type="image/webp"
        />
        <img
          className="h-28 w-28 rounded-full object-fill"
          src="https://s3-us-west-2.amazonaws.com/public.notion-static.com/d9a1f6e9-e490-4719-8c36-f49ed35adbcf/.jpg"
        ></img>
      </picture>

      <div className="mt-4 text-2xl font-bold">某亚瑟</div>
    </div>
  )
}
export default UserInfo
