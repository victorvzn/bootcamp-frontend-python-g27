const ShoppingCart = () => {
  return (
    <section>
      <h3>Carrito de compras</h3>

      <div>
        <button>
          Limpiar carrito
        </button>
      </div>

      <ul>
        <li>
          <span>Producto 1</span>
          <span>S/ 50.50 (Qty: 5)</span>
          <button>
            ❌
          </button>
        </li>
      </ul>

      <div>
        <strong>TOTAL:</strong> <span>S/ 250.00</span>
      </div>
    </section>
  )
}

export default ShoppingCart