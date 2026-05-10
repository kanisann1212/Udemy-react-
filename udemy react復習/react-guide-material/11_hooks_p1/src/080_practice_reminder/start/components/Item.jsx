import { useState } from "react"
import { useTodoDispatch } from "../context/TodoContext";

export const Item = ({ todo }) => {
  const dispatch = useTodoDispatch()
  const [editingtodo, setEditingtodo] = useState(todo.content)
  const changeEditing = (e) => setEditingtodo(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing }
    dispatch({ type: "todo/update", todo:newTodo })
  }
  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { 
      ...todo, 
      editing: !todo.editing, 
      content: editingtodo,
    }
    dispatch({ type: "todo/update", todo: newTodo })
  }

  const complete = (todo) => {
    dispatch({ type: "todo/delete",  todo })
  }


  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input value={editingtodo} onChange={changeEditing} />
          ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
          )}
      </form>
    </div>
  )

}