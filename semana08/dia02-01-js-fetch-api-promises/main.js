// Petición -> Request (Consultar información a un servidor. Ej. API (Application Programming Interface) y además podemos esperar a la respuesta (Response)

// Ejemplo: consultar informacion de películas, listar productos, guardar un pedido, actualizar la informacion de una cita médica, eliminar una categoria.

// Para consultar esa información lo hacemos usando fetch API.

// Tipos de peticiones
// GET -> Obtener datos (El método por defecto la fetch API)
// POST -> Enguar datos para que sean guardados
// PUT / PATH -> Actualizar datos que ya existen
// DELETE -> Eliminar datos

// Extensión de chrome para formatear JSON 
// https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en&pli=1


// OBJETIVO: Consultar información en formato JSON desde una URL desde JS

console.log(fetch('https://jsonplaceholder.typicode.com/posts')) // Devuelve una promesa (Promise) -> Promise {<pending>}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data) // Aquí podemos usar el objeto JS

    console.log(data[0].title)
  })

// STATUS CODE: 
// * 200 OK
// * 201 Created
// * 204 No Content
// * 400 Bad Request
// * 401 Unauthorized
// * 403 Forbidden
// * 404 Not Found
// * 500 Internal Server Error

// DONE: Renderizar todos los posts en la página mostrando su id, title y body

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const divApp = document.querySelector('#app')

    let postsList = ''

    posts.forEach(post => {
      postsList += `
        <article>
          <h2>${post.id} - ${post.title}</h2>
          <p>${post.body}</p>
        </article>
      `
    });

    console.log(postsList)

    divApp.innerHTML = postsList
  })

  // TODO: Renderizar todos los users en la página mostrando su id, name y company name
  // https://jsonplaceholder.typicode.com/users