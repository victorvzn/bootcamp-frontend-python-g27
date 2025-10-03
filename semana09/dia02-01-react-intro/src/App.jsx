// 07 - USANDO EXPRESIONES CON JSX

import { EDAD, LISTA_DE_FRUTAS, curso } from './components/frutas.js'

const App = () => {
  const suma = 8 + 9
  const nombre = 'Victor'

  // Comentario en React/JS dentro del cuerpo de la función
  /* Otro comentario multilíneas */

  return (
    <div>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      <p>{1 + 2 * 9 ** 2}</p>

      <p>{suma}</p>

      <p>Hola {nombre}</p>

      <p>{`Hola ${nombre}`}</p>

      {/* Comentario en React dentro del JSX 1+2 */}

      <p>{LISTA_DE_FRUTAS}</p>

      <p>{EDAD}</p>

      <p>{JSON.stringify(curso)}</p>
    </div>
  )
}

export default App

// 06 - IMPORTANDO COMPONENTES EXTERNOS
// import { ComponenteDespedida } from './components/componente-despedida.jsx'
// import { ComponenteSaludo } from './components/ComponenteSaludo.jsx'

// export default function App() {
//   return (
//     <section>
//       <div>Componente anidados 5 + 6</div>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// 05 - ANIDANDO COMPONENTES DENTRO DE OTROS

// function ComponenteSaludo() {
//   return <h4>Hola alumnos!</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Hasta luego alumnos!</h4>
// }

// export default function App() {
//   return (
//     <section>
//       <div>Componente anidados</div>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }

// 04 - EXTENSIÓN NECESARIA PARA USAR REACT EN VSCODE
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTES (rfc, rafce)

// snippet: rfc

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 03 - COMPONENTE USANDO MÚLTIPLES LÍNEAS + FRAGMENTS (<></>)

// const App = () => {
//   // Cuerpo de la función donde va la lógica del componente

//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </>
//   )
// }

// 02 - COMPONENTE BASE USANDO ARROW FUNCTIONS

// const App = () => <h1>Vite + React + JSX - Arrow</h1>

// const App = () => {
//   return (
//     <h1>Vite + React + JSX - Arrow</h1>
//   )
// }

// export default App

// 01 - COMPONENTE BASE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Vite + React + JSX - hola</h1>
//   )
// }

// export default App


// 00 - ESM
import defecto, { sumar, PI } from './javascript-esm-modules.js'

console.log(sumar(43, 89))
console.log(PI)
console.log(defecto())