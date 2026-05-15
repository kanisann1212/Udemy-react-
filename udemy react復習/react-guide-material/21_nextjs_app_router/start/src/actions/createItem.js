'use server'
import { ENDPOINT } from "@/constants";


export async function createItem(state,formData) {
  // ↑useFormStateを使う場合はサーバアクションの関数の第一引数にstateを設定する
  const id = formData.get('id')
  const title = formData.get('title')

  if (id === '' || title === '') {
    return { msg: '入力フィールドが空です。' }
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
    // ↑POSTをするとちゃんと登録しました！って言った感じの確認書が返ってくる(登録した内容とサーバーが付け加えた内容が入ってる)のでそれをjson➡jsオブジェクトに変換➡そのごresponseでjsonにして自分のコンポーネントに返してあげる
    return { msg: `${data.id}:${data.title}の登録完了`}
  } catch (e) {
  return { msg: '登録に失敗しました' }
}
}


// ※server actionはuse serverをファイルの先頭orコンポーネント内に記述するだけ、returnでRsponseをつかわずとも勝手にjsonに変換してかえしてくれる

