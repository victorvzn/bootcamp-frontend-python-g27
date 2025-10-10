import { useState } from 'react'

import './App.css'

import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'

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

  const handleClearCompletedTodos = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  const handleSave = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <main>
      <TodoHeader title='Todo App + React + Tailwind + props' />

      <TodoForm onSubmit={handleSave} />

      <TodoStats todos={todos} onClearCompletedTodos={handleClearCompletedTodos} />

      <TodoList todos={todos} onCompleted={handleCompleted} onRemove={handleRemove} />

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App
