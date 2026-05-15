'use client';

import { createItem } from "@/actions/createItem";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function ArticleForm() {
  const [newId, setNewId] = useState();
  const [newTitle, setNewTitle] = useState();

  useFormstateは
  const [state,createItemAction] = useFormState(createItem, {msg:null} )
  // ↑第一引数にサーバアクションで定義した関数を登録する
  // ↑stateにはサーバアクションの関数の実行結果が入る

  return (
    <form action={createItemAction}>
      <div>
        <label>
          {" "}
          Id:
          <input type="number" name="id" value={newId} onChange={(e) => setNewId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input name="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: 'red' }}>{state.msg}</div>
    </form>
  );
}
