import { getUserData } from "../libs/notion/getUserData";
import notion from "../libs/notion";
import { log } from "../libs/common/log";

const Test = ({ res }: any) => {
  return <>{res}</>;
};
export default Test;

export async function getStaticProps() {
  const res = await getUserData();
  // const res = await notion.users.me({})
  return {
    props: {
      res: JSON.stringify(res),
    },
  };
}
