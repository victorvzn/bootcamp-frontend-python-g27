import { useState } from 'react'

import './App.css'

function App() {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript 123',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: false
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwind CSS',
      completed: true
    }
  ] 

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')

  const handleRemove = (id) => {
    console.log('Click', id)
    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos) // Remplazamos el estado todos con los todos actulizados
  }

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

  const handleCompleted = (id) => {
    console.log('Completando tarea...')

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  const completedTodos = todos.filter(todo => todo.completed)

  const handleClearCompletedTodos = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  return (
    <main>
      <h1>Todo App + React + Tailwind</h1>

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

      {/* {input} */}

      {/* TODO: Llenar los datos de las estadisticas y limpiar las tareas completadas con el botón */}
      <section>
        <span>
          {completedTodos.length} de {todos.length} completadas
        </span>

        <button
          onClick={handleClearCompletedTodos}
        >
          Limpiar completadas
        </button>
      </section>

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

      <pre>{JSON.stringify(todos, null, 2)}</pre>

      {/* <h1 className='logo' style={{ color: 'red', backgroundColor: '#ade' }}>Hola React.js!</h1> */}
    </main>
  )
}

export default App
