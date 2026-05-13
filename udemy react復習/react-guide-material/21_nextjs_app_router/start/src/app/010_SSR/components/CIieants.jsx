'use client'
import { useEffect, useState } from "react"

export default function Clients() {
  const [state, setState] = useState(undefined)
  useEffect(() => {
    setState('こんにちわ、ステート')
  }, [])
  return (
    <>
      <h2>クライアント側：{state}</h2>
    </>
  )
}

// 基本的にHooksを使うページは 'use client'と記述してクライアント側で読み込むことを明示的に示さなきゃいけない。HooksはSSRでしか動かないので
// ↓↓↓
// Next.jsの基本設計はSGでつくる、ので基本ページはSG、Hooksを使うときは別ファイルで切り出す