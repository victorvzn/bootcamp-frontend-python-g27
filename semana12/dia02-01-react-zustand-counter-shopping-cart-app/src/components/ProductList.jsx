import { useCartStore } from "../store/cart"

const ProductList = ({ products }) => {
  const { addToCart } = useCartStore()

  return (
    <section className="flex flex-col p-4">
      <h3 className="text-2xl mb-4 text-center">Product List</h3>

      <section className="grid grid-col-1 md:grid-cols-4 gap-4">
        {products.map(product => {
          return (
          <article
            key={product.id}
            className="bg-amber-100 p-2 min-w-14 rounded-lg flex flex-col items-center gap-2"
          >
            <img src={product.thumbnail} alt={product.title} width={150} />
            <p className="text-center font-bold">{product.title}</p>
            <button
              className="bg-blue-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold hover:bg-blue-500 duration-300"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </article>
          )
        })}
      </section>
    </section>
  )
}

export default ProductList