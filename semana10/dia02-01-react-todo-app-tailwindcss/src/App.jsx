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

  return (
    <main>
      {/* <h1 className='logo' style={{ color: 'red', backgroundColor: '#ade' }}>Hola React.js!</h1> */}
      <h1>Todo App + React + Tailwind</h1>

      <ul>
        {todos.map(todo => {
          return <li>{todo.title}</li>
        })}
      </ul>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App
