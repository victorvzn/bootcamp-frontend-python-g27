// 03 - COMPONENTE USANDO MÚLTIPLES LÍNEAS + FRAGMENTS (<></>)

const App = () => {
  // Cuerpo de la función donde va la lógica del componente

  return (
    <>
      <h1>Hola React!</h1>
      <p>Estamos aprendiendo sobre componentes.</p>
    </>
  )
}

// 02 - COMPONENTE BASE USANDO ARROW FUNCTIONS

// const App = () => <h1>Vite + React + JSX - Arrow</h1>

// const App = () => {
//   return (
//     <h1>Vite + React + JSX - Arrow</h1>
//   )
// }

export default App

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