import { getUserData } from "../libs/notion/getUserData";
import { getDatabaseData } from "../libs/notion/getDatabaseData";

const Test1 = ({ res }: any) => {
  return <>{res}</>;
};
export default Test1;

export async function getStaticProps() {
  const res = await getDatabaseData();

  return {
    props: {
      res: JSON.stringify(res),
    },
  };
}
