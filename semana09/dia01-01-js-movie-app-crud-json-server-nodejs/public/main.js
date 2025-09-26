import { fetchMovies } from './services.js'

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
            <button>
              ❌
            </button>
          </div>
        </td>
      </tr>
    `
  })

  movieList.innerHTML = html
}

const moviesForm = document.querySelector('#moviesForm')

moviesForm.addEventListener('submit', (event) => {
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

  // 3. Actualizar la lista de películas
})

fetchMovies()
  .then(data => {
    renderMovies(data)
  })
