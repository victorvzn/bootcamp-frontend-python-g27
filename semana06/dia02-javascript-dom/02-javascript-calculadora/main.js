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

    // Se presionó algún número
    numeroActual = Number(numeroActual + buttonText)

    inputDisplay.value = numeroActual
  })
})