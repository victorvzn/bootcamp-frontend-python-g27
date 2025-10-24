import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'Product 1'},
    // { id: 2, title: 'Product 2'},
    // { id: 3, title: 'Product 3'},
  ],
  reducers: {
    addToCart: (state, action) => {
      // Va la logica para añadir al carrito de compras
      console.log('addToCart', action.payload)
    },
    removeFromCart: (state, action) => {
      // Va la lógica para remover un producto del carrito
      console.log('removeFromCart')
    },
    clearCart: (state) => {
      // Va la lógica para limpiar el carrito de compras
      console.log('clearCart')
    }
  }
})

// Exportar el estado inicial y los reducers del slice
export default CartSlice.reducer

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions