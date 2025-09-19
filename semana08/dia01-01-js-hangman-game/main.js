const palabraOculta = document.querySelector('.ahorcado__palabra-oculta')
const botones = document.querySelector('.ahorcado__botones')
const resultado = document.querySelector('.ahorcado__resultados')
const botonReiniciar = document.querySelector('.ahorcado__reiniciar')

// palabraOculta.textContent = 'HOLA A TODOS'

const PALABRA_RESPUESTA = 'JAVASCRIPT'

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('') // Un arreglo

const renderizarAlfabeto = () => {
  ALFABETO.forEach(letra => {
    const boton = document.createElement('button')
    
    boton.textContent = letra

    boton.className = 'bg-blue-500 p-2 text-white font-bold text-xl cursor-pointer hover:bg-blue-600 duration-300 rounded'

    boton.addEventListener('click', () => console.log(letra))

    botones.appendChild(boton)
  })

  // let contenido = ''

  // ALFABETO.forEach(letra => {
  //   contenido = contenido + `
  //     <button class="bg-blue-500 p-2 text-white font-bold text-xl cursor-pointer hover:bg-blue-600 duration-300 rounded">${letra}</button>
  //   `
  // })

  // botones.innerHTML = contenido
}

renderizarAlfabeto()