import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

export async function generateStaticParams(){
  const data = await fetch(ENDPOINT)
  const res = await data.json()
  return res.map(record=>({id:record.id}))
}
  

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
