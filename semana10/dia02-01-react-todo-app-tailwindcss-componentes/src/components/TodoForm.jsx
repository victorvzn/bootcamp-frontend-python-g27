import { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: 01 - Crear un nuevo todo en el estado todos
    console.log('Creando tarea...', input)

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    setTodos([...todos, newTodo])

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='¿Qué deseas hacer hoy?'
        required
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <input type='submit' value='Save' />
    </form>
  )
}

export default TodoForm