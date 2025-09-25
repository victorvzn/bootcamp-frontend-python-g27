export const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies'
  
  const response = await fetch(url)

  return await response.json()
}