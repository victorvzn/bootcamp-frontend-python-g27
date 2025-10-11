import { useState } from "react"

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => setCount(count - 1)
  
  const increment = () => setCount(count + 1)

  return {
    count,
    decrement,
    increment
  }
}
