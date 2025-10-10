import { useEffect } from 'react'
import { supabase } from './lib/supabase'
import { useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log('Esto se ejecuta al crear el componente')
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select('*')

      console.log(response)

      setMovies(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Vite + React + Supabase
      </h1>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App