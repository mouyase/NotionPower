import { getUserData } from '../libs/notion/getUserData'
import { getDatabaseData } from '../libs/notion/getDatabaseData'
import { getPostData } from '../libs/notion/getPostData'

const Test2 = ({ res }: any) => {
  return (<>{res}</>)
}
export default Test2

export async function getStaticProps() {
  const res = await getPostData()

  return {
    props: {
      res: JSON.stringify(res)
    }
  }
}
