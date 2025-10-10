const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => handleCompleted(todo.id)}
          />

          <span className={`${todo.completed ? 'completed' : ''}`}>
            {todo.title}
          </span>

          <button onClick={() => handleRemove(todo.id)}>❌</button>
        </li>
      })}
    </ul>
  )
}

export default TodoList