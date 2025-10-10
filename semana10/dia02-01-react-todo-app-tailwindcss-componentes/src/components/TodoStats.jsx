const TodoStats = ({ todos, onClearCompletedTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <section>
      <span>
        {completedTodos.length} de {todos.length} completadas
      </span>

      <button
        onClick={onClearCompletedTodos}
      >
        Limpiar completadas
      </button>
    </section>
  )
}

export default TodoStats