// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT)
  const res = await data.json()
  return Response.json(res)
}


  export async function POST(request) {
    const formdata = await request.formData()
    const id = formdata.get('id')
    const title = formdata.get('title')

    if(id ==='' || title ===''){
      return Response.json({ msg: '入力フィールドが空です。' }, { status: 500 })
    }
    try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      // ↑どんなことをするのかを指定する
      headers: {
        "Content-Type": "application/json"
        // ↑どういうデータ形式で送るのかしているする
      },
      body: JSON.stringify({ id, title })
      // ↑どういうデータを送るのかを指定する
    })
    const data = await res.json()
    // ↑POSTをすると生のストリームデータが返ってくるのでそれをjson➡jsオブジェクトに変換➡そのごresponseでjsonにして自分のコンポーネントに返してあげる
    return Response.json(data)
  } catch (e) {
    return Response.json({ msg: '登録に失敗しました' }, { status: 500 })
  }
}
