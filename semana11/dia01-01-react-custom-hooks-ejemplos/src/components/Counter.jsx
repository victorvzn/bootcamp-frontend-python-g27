import { useState } from "react"

const useCounter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => setCount(count - 1)
  
  const increment = () => setCount(count + 1)

  return {
    count,
    decrement,
    increment
  }
}


const Counter = () => {
  const { count, decrement, increment } = useCounter()

  return (
    <div>
      <h3>Counter</h3>

      <div>
        <button onClick={decrement}>-</button>
        <strong>{count}</strong>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter


// ANTES DE USAR CUSTOM HOOKS USANDO USESTATE

// import { useState } from "react"

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h3>Counter</h3>

//       <div>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <strong>{count}</strong>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

// export default Counter