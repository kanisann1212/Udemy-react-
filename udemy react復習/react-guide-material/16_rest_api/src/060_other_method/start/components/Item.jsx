import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoAPI from "../api/todo";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: 'todo/update', todo: newTodo });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    const PATCH = async () => {
      const res = await todoAPI.patch(newTodo)
      dispatch({ type: 'todo/update', todo: res });
    }
    PATCH()
  };

  const complete = (todo) => {
    const DELETE = async () => {
      await todoAPI.delete(todo)
      dispatch({ type: "todo/delete", todo });
    }
    DELETE()
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
