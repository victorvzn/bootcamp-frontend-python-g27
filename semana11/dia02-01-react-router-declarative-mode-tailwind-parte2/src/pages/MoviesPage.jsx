import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

const MoviesPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select()

      console.log(response)

      setMovies(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <>
      <h1 className="text-2xl">MoviesPage</h1>

      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.name}</li>
        })}
      </ul>
    </>
  )
}

export default MoviesPage