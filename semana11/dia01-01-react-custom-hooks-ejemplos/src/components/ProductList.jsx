import { useEffect, useState } from "react"

const fetchProducts = () => {
  return fetch('https://dummyjson.com/products?delay=2000')
    .then(reponse => reponse.json())
}

const ProductList = () => {
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

  // Conditional rendering
  if(loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <h2>Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h4>{product.id} - {product.title}</h4>
              <p>{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList



// useEffect. permite ejecutar código cuando algo cambia o cuando el componente aparece en pantalla (montar, mount)

// Lo encontramos al llamar APIs, escuchar eventes, ejecutar lógica cuando cambian los estados(ej. counter)

// Sintaxis

// useEffect(FUNCTION, DEPENDENCIAS)

/*
useEffect(() => {
  // Código que se ejecuta segun las dependencias
}, [])
*/

// Cuando el arreglo de las depencidas está vacío significa que el componente aparece por primera vez.