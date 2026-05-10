import { createContext, useContext, useReducer } from "react"
const TodoState = createContext()
const TodoDispatch = createContext()

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false
  },
  {
    id: 2,
    content: "卵買う",
    editing: false
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false
  },
];


const reducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map(_todo => {
        return _todo.id === action.todo.id 
        ? { ..._todo, ...action.todo } 
        : { ..._todo }
      })
    default:
      return todos;
  }
}

export const TodoContext = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, todosList)


  return (
    <TodoState.Provider value={todos}>
      <TodoDispatch.Provider value={dispatch}>
        {children}
      </TodoDispatch.Provider>
    </TodoState.Provider>
  )
}

export const useTodoState = () => useContext(TodoState)
export const useTodoDispatch = () => useContext(TodoDispatch)