const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuandohagamos click en el botón 'Añadir tarea'
  console.log('Click!!!', taskInput.value)

  // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
  const button = document.createElement('button')
  button.textContent = 'Hola soy un botón'
  console.log({button})
  document.body.appendChild(button)
})