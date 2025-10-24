// PASO-01: Creamos un store con los reducers que necesitamos

import { configureStore } from '@reduxjs/toolkit'

// import ???
import counterReducer from './counter.js'
import cartReducer from './cart.js'

export const store = configureStore({
  // Aquí va la configuración y los reducers
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  }
})