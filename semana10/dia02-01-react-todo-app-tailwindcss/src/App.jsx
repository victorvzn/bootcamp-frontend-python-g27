import { useState } from 'react'

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

  const handleRemove = (id) => {
    console.log('Click', id)
    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos) // Remplazamos el estado todos con los todos actulizados
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: 01 - Crear un nuevo todo en el estado todos
    console.log('Creando tarea...')
  }

  return (
    <main>
      <h1>Todo App + React + Tailwind</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='¿Qué deseas hacer hoy?'
          required
        />
        <input type='submit' value='Save' />
      </form>

      <ul>
        {todos.map((todo, index) => {
          return <li key={todo.id}>
            {todo.title}

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
