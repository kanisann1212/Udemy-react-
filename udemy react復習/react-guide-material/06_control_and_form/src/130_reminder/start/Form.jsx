import { useState } from "react";

const Form = ({ createTodo }) => {
  const [formed, setFormed] = useState("")
  const addForm = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: formed
    }
    createTodo(newTodo)
    setFormed("")
  }
  return (
    <div>
      <form onSubmit={addForm}>
        <input type="text" value={formed} onChange={(e) => setFormed(e.target.value)}></input>
        <button>追加</button>
      </form>
    </div>
  )
}
export default Form;