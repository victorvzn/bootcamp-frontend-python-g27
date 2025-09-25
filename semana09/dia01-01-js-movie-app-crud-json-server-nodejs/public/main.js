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

fetchMovies()
  .then(data => {
    renderMovies(data)
  })
