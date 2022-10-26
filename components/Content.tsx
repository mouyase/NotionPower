import UserInfo from './UserInfo'
import Side from './Side'
import Main from './Main'

const Content = (props: any) => {
  const { articleList } = props
  return (
    <div className='flex w-screen justify-center bg-gray-100 p-8'>
      <div className='container flex'>
        <Side className='w-72 flex-shrink-0'>
          <UserInfo></UserInfo>
        </Side>
        <Main articleList={articleList}></Main>
        <Side className='w-72 flex-shrink-0'>
        </Side>
      </div>
    </div>
  )
}
export default Content
