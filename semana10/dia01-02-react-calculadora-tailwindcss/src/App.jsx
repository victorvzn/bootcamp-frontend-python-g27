import { useState } from "react"

const App = () => {
  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (event) => {
    // console.log('Click')

    const buttonText = event.target.textContent

    console.log(buttonText)

    // 1. Evaluamos cuando hacemos click en el operador(+, -, *)
    if ('+-*'.includes(buttonText)) {
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
    } else if (buttonText === '=') {
      if(operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      }
      if(operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      }
      if(operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
    } else if (buttonText === 'CE') {
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      // 2. Evaluamos cuando presionamos algún número
      setNumeroActual(Number(numeroActual + buttonText))
    }
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