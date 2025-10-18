// counterReducer

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 25,
  reducers: {
    // Sin parámetros (sin payload)
    increment: (state) => {
      // state => 99
      return state + 1
    },
    decrement: (state) => state - 1,
    // Con parámetros (con payload)
    incrementBy: (state, action) => state + action.payload
    // Payload, es la data que pasamos como parámetro al llamar a una acción desde el componente
  }
})

// const [counter, setCounter] = useState(0)

// Exportando el estado inicial y a los reducers del slide
export default counterSlice.reducer

// Exportamos las acciones
export const { increment, decrement, incrementBy } = counterSlice.actions