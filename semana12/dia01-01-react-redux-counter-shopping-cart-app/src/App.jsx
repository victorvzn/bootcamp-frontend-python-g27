import { useState, useEffect } from "react"

import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <main>
      <section className="flex gap-2">
        <ProductList products={products} />

        <ShoppingCart />
      </section>

      <Counter />
    </main>
  )
}

export default App