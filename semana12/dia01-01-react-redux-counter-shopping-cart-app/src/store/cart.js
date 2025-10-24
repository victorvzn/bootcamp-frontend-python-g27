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
      // En action.payload está la información del producto
      console.log('addToCart', action.payload)
      const newProduct = action.payload

      // Validar cuando el producto existe en el carrito de compras
      const productInCartIndex = state.findIndex(
        product => product.id === newProduct.id
      ) // Si encuentra el elemento devuelve su indice y si no devuelve -1

      if (productInCartIndex >= 0) {
        return state.map(product =>{
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })
      }

      // Cuando el producto es nuevo en el carrito lo agregamos al estado directamente
      return [
        ...state,
        {
          ...newProduct,
          qty: 1
        }
      ]
    },
    removeFromCart: (state, action) => {
      // Va la lógica para remover un producto del carrito
      console.log('removeFromCart')
      // TODO: remover el producto del carrito de compras
      const productId = action.payload // Id del producto a eliminar

      return state.filter(
        product => product.id !== productId
      )
    },
    clearCart: (state) => {
      // Va la lógica para limpiar el carrito de compras
      console.log('clearCart')
      // TODO: Limpiar el carrito de compras
      return []
    }
  }
})

// Exportar el estado inicial y los reducers del slice
export default CartSlice.reducer

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions