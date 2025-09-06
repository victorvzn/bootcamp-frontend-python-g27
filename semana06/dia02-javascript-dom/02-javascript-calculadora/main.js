let numeroActual = '0'
let operador = ''
let operando = ''

// Consultando un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
// Consultando multiples elementos a la vez
const buttons = document.querySelectorAll('.button')

console.log(buttons)

// EVENTOS
buttons.forEach(function(button) {

  // button.addEventListener(NOMBRE_EVENTO, FUNCION)
  button.addEventListener('click', function(event) {
    // console.log('Hice click!', event.target)

    const buttonSelected = event.target
    const buttonText = buttonSelected.textContent

    console.log(buttonText)

    if ('+-*'.includes(buttonText)) {
      // 02. Accionamos el operador
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // Cuando presionamos el botón '='
      // 3. Aquí realizamos las operaciones en base al número actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'CE') {
      // Cuando presionamos el botón 'CE'
      // 4. Limpiamos operando, operador y e input
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // 01. Se presionó algún número
      numeroActual = Number(numeroActual + buttonText)
    }

    inputDisplay.value = numeroActual
  })
})