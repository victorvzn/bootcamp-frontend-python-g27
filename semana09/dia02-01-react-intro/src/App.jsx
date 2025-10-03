// 01 - COMPONENTE BASE USANDO FUNCTION

function App() {
  return (
    <h1>Vite + React + JSX - hola</h1>
  )
}

export default App


// 00 - ESM
import defecto, { sumar, PI } from './javascript-esm-modules.js'

console.log(sumar(43, 89))
console.log(PI)
console.log(defecto())