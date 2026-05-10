import List from "./List"
import Form from "./Form"
import { TodoContext } from "../context/TodoContext";

const Todo = () => {
  return (
    <TodoContext>
      <List />
      <Form />
    </TodoContext>
  )
};
export default Todo;
