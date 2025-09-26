const url = 'http://localhost:3000/movies'

export const fetchMovies = async () => {
  const response = await fetch(url) // Esperar la respuesta del servidor (asincrona)

  return await response.json() // Esperar a la conversión de JSON a Objeto JS (asincrona)
}

export const createMovie = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form) // El body siempre tiene que ser una cadena de texto
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const deleteMovie = async (id) => {
  // Aquí va la lógica para eliminar una película
  const options = {
    method: 'DELETE'
  }

  // http://localhost:3000/movies/1
  const response = await fetch(`${url}/${id}`, options)

  return await response.json()
}