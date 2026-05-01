
const List = ({ todos, deleteTodo}) => {
  return (
    <div>
      {
        todos.map(todo => {
          return (
            <div key={todo.id}>
              <button onClick={()=>deleteTodo(todo.id)}>完了</button>
              <label id={todo.id}>{todo.content}</label>
            </div>
          )
        })
      }
    </div>
  )
}
export default List;