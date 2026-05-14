import Clients from "./components/CIieants"
import { ENDPOINT } from "@/constants"
import ArticleList from "@/components/articleList"

export default async function SSRPages() {
  const res = await fetch(ENDPOINT,{next: {revalidate:10}})
  const article =await res.json()
  return (
    <>
      <h1>こんにちわ 2026/5/14 8:04</h1>
      <Clients />
      <ArticleList basePath={"/010_SSR"} list={article} />
    </>
  )
}