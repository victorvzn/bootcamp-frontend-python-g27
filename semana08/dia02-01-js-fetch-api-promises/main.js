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
  .then(response => response.json())
  .then(data => console.log(data))

