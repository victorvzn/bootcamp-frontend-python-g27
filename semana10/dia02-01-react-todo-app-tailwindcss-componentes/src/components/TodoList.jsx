const TodoList = ({ todos, onCompleted, onRemove }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => onCompleted(todo.id)}
          />

          <span className={`${todo.completed ? 'completed' : ''}`}>
            {todo.title}
          </span>

          <button onClick={() => onRemove(todo.id)}>❌</button>
        </li>
      })}
    </ul>
  )
}

export default TodoList