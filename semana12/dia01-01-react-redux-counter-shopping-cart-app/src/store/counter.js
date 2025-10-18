// counterReducer

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 99,
  reducers: {
    // Sin parámetros (sin payload)
    increment: (state) => {
      // state => 99
      return state + 1
    },
    decrement: (state) => state - 1,
  }
})

// const [counter, setCounter] = useState(0)

// Exportando el estado inicial y a los reducers del slide
export default counterSlice.reducer

// Exportamos las acciones
export const { increment, decrement } = counterSlice.actions