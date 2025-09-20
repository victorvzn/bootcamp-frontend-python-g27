// OBJETIVO: Realizar peticiones HTTP asícronas mediante el API fetch usando async/await

// 01 - PROMISES
fetch('https://jsonplaceholder.typicode.com/users')
  // Necesitammos averiguar si llegó una respuesta correcta o un error
  // usamos .then para procesar la respusta correcta
  .then(response => {
  
    if (!response.ok) {
      throw new Error('hubo un error')
    }

    return response.json()
  }) // Convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data) // Aquí podemos usar el objeto JS
  })
  // Usamos .catch para recibir cualquier error inesperado
  .catch(error => console.log(error))


const url = 'https://jsonplaceholder.typicode.com/users'

const fetchUsersSinRetorno = async () => { // Retorna una promesa (Promise)
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)
}

// fetchUsersSinRetorno()

const fetchUsersConRetorno = async () => { // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

// console.log(fetchUsersConRetorno()) // Promise {<pending>}

// fetchUsersConRetorno() // Al ser una promesa podemos usar los métodos then o catch
//   .then((data) => console.log(data))

async function fetchUsersConRetornoYManejoDeErrores() {
  try {
    const response = await fetch(url)

    console.log(response)
    if (!response.ok) { // ok === true === STATUS CODE 200
      console.log('Tuvimos problemas para cargar el recurso users')
      throw new Error('ERROR HTTP', response.status)
    }

    return await response.json()
  } catch(error) {
    console.log('CATCH ERROR', error) // Pasa por el catch cuando hay errores inesperados
  }
}

fetchUsersConRetornoYManejoDeErrores()
  .then(data => console.log(data))