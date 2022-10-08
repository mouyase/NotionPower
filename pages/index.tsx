import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const time = new Date().getMilliseconds().toString()
  return {
    props: {
      time
    },
    revalidate: 10
  }
}
