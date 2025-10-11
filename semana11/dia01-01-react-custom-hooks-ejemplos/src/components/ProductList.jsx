const ProductList = () => {
  return (
    <div>ProductList</div>
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