import { useState } from "react"

const App = () => {
  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = () => {
    console.log('Click')
  }

  return (
    <main>
      <h1>Calculadora con JS</h1>

      <section>
        <input
          readOnly
          value={numeroActual}
        />

        <div>
          <button onClick={handleButton}>+</button>
          <button onClick={handleButton}>-</button>
          <button onClick={handleButton}>*</button>

          <button onClick={handleButton}>7</button>
          <button onClick={handleButton}>8</button>
          <button onClick={handleButton}>9</button>
          <button onClick={handleButton}>4</button>
          <button onClick={handleButton}>5</button>
          <button onClick={handleButton}>6</button>
          <button onClick={handleButton}>1</button>
          <button onClick={handleButton}>2</button>
          <button onClick={handleButton}>3</button>

          <button onClick={handleButton}>CE</button>
          <button onClick={handleButton}>=</button>
        </div>
      </section>
    </main>
  )
}

export default App