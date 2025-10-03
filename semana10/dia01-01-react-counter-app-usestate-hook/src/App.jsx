import { useState } from "react"

const App = () => {

  // const contador = 8
  // [valor, funcion] = useState(inicializador)

  const [contador, setContador] = useState(0) //

  const increment = () => {
    setContador(contador + 1)
  }

  const decrement = () => {
    setContador(contador - 1)
  }

  return (
    <div>
      <h1>Contador</h1>

      <button onClick={increment}>+1</button>
      <span>{contador}</span>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

// const App = () => {
//   let contador = 3

//   console.log(contador)

//   return (
//     <div>
//       <button onClick={() => {
//         contador = contador + 1
//         console.log(contador)
//       }}>{contador}</button>
//     </div>
//   )
// }

export default App