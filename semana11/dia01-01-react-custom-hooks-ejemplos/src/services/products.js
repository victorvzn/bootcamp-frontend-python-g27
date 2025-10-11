export const fetchProducts = () => {
  return fetch('https://dummyjson.com/products?delay=2000')
    .then(reponse => reponse.json())
}