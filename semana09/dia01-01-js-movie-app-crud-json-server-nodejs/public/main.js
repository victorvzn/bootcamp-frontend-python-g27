import { fetchMovies, createMovie, deleteMovie } from './services.js'

const renderMovies = (movies = []) => {
  const movieList = document.querySelector('.movies__list')

  let html = ''

  movies.forEach(movie => {
    html += `
      <tr>
        <td>
          ${movie.id}
        </td>
        <td>
          <img
            src="${movie.image}"
            onerror="this.src='https://placehold.co/100x150?text=Error'"
          />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div>
            <strong>Release:</strong> ${movie.release}
          </div>
          <div>
            <strong>Summary:</strong> ${movie.summary}
          </div>
        </td>
        <td>
          <div>
            <button>
              ✏
            </button>
            <button class="movies__remove" data-id="${movie.id}">
              ❌
            </button>
          </div>
        </td>
      </tr>
    `
  })

  movieList.innerHTML = html

  const removeButtons = document.querySelectorAll('.movies__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      // 1. Extraer el id de la pelicula a eliminar
      const { id } = event.target.dataset // dataset -> { id: ??? }

      console.log(id)

      // TODO: Terminar de hacer el llamado a la función 'deleteMovie(id)' y refrescar la tabla de peliculas

      // 2. Eliminar la película en el servidor (opcional: pedir confirmación)
      const confirmDelete = confirm('¿Estas seguro de eliminar esta película?') // Devuelve un booleano

      if (confirmDelete) {
        await deleteMovie(id)

        const movies = await fetchMovies()
  
        renderMovies(movies)
      }
      // 3. Actualizar la lista de películas
    })
  })
}

const moviesForm = document.querySelector('#moviesForm')

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault() // Evita que el formulario actualice la página

  console.log('Guardando pelicula....')

  // 1. Extraer los datos del formulario
  // moviesForm.querySelector("input[name='name'")

  const peliculaForm = document.forms['moviesForm']

  console.log({ peliculaForm })

  const name = peliculaForm.name.value
  const image = peliculaForm.image.value
  const release = peliculaForm.release.value
  const genreId = peliculaForm.genreId.value
  const summary = peliculaForm.summary.value

  console.log(name, image, release, genreId, summary)

  // 2. Crear la película en el servidor
  const newMovie = {
    name,
    image,
    release,
    genreId,
    summary
  }

  try {
    const response = await createMovie(newMovie)

    console.log(response)

    if (!response.ok) {
      console.log('La película no se guardó correctamente')
      return
    }

    // 3. Actualizar la lista de películas
    const movies = await fetchMovies()

    renderMovies(movies)

    // 4. Limpiamos el formulario
    
  } catch(error) {
    console.log(error) // Errores inesperados
  }

  peliculaForm.reset()
})

fetchMovies()
  .then(data => {
    renderMovies(data)
  })
