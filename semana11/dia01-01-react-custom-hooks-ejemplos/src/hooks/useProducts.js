import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Aparece por primera vez')
    setLoading(true)
    // Se ejecuta al cargar por primera vez el componente gracias al arreglo vacío ([])
    fetchProducts()
      .then(data => {
        console.log(data.products)
        setProducts(data.products)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return {
    loading,
    products
  }
}