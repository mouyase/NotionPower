import { getUserData } from '../libs/notion/getUserData'

const Test = ({ res }: any) => {
  return (<>{res}</>)
}
export default Test

export async function getStaticProps() {
  const res = await getUserData()

  return {
    props: {
      res: JSON.stringify(res)
    }
  }
}
