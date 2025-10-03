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
    <main className="bg-blue-400 w-[340px] my-0 mx-auto mt-5 p-4 rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        Calculadora con JS
      </h1>

      <section className="flex flex-col gap-2">
        <input
          readOnly
          value={numeroActual}
          className="border p-2 text-right text-3xl font-bold rounded-md"
        />

        <div className="grid grid-cols-3 gap-3">
          <button
            className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300"
            onClick={handleButton}
          >+</button>
          <button
            className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300"
            onClick={handleButton}
          >-</button>
          <button
            className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300"
            onClick={handleButton}
          >*</button>

          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >7</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >8</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >9</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >4</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >5</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >6</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >1</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >2</button>
          <button
            className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300"
            onClick={handleButton}
          >3</button>

          <button
            className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300"
            onClick={handleButton}
          >CE</button>
          <button
            className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300"
            onClick={handleButton}
          >=</button>
        </div>
      </section>
    </main>
  )
}

export default App