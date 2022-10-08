const Article = ({ time }: any) => {
  return (<>{time}</>)
}
export default Article

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '1' } }],
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const time = new Date().getMilliseconds().toString()
  return {
    props: {
      slug,
      time
    },
    revalidate: 10
  }
}
