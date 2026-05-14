import { ENDPOINT } from "@/constants"
import Article from "@/components/article"

export default async function SSRPages({ params }) {
  const dot = await fetch(`${ENDPOINT}/${params.id}`,{next: {revalidate:10}})
  const go = await dot.json()
  return (
    <>
      <Article data={go} />
    </>
  )
}