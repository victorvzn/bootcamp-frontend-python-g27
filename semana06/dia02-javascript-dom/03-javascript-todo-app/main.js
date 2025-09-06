const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuandohagamos click en el botón 'Añadir tarea'
  console.log('Click!!!', taskInput.value)

  // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // console.log({button})
  // document.body.appendChild(button)

  // DONE: 01 Añadir el elemento li al elmento con la clase task__list
  const li = document.createElement('li')

  // TODO: 01 Añadir un checkbox al li

  // DONE: 02 Añadir el elemento span al elemento li
  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  // DONE: 03 Añadir el elemento button al elemento li
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  // taskList.innerHTML = `<li>
  //   <input type="checkbox" />
  //   <span>Tarea 1</span>
  //   <button>Borrar</button>
  // </li>`

  // TODO: 02 Limpiar la caja de texto después de crear la tarea

})

// TODO: 03 permitir al botón borrar remover una tarea de la lista
