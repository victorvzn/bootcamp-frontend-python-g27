const ShoppingCart = () => {
  return (
    <section className="w-56 p-2">
      <h3 className="text-2xl mb-2 text-center">Carrito de compras</h3>

      <div className="mb-2">
        <button
          className="bg-violet-400 text-white px-3 py-2 rounded-lg cursor-pointer w-full hover:bg-violet-600 duration-300"
        >
          Limpiar carrito
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        <li
          className="flex flex-col gap-2 font-bold bg-slate-200 p-2 rounded-lg shadow"
        >
          <span>Producto 1</span>
          <span>S/ 50.50 (Qty: 5)</span>
          <button
            className="bg-red-400 text-white py-1 rounded-lg cursor-pointer w-full hover:bg-red-600 duration-300"
          >
            ❌
          </button>
        </li>
      </ul>

      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">
        <strong>TOTAL:</strong> <span>S/ 250.00</span>
      </div>
    </section>
  )
}

export default ShoppingCart