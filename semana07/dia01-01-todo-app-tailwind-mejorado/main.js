const taskInput = document.querySelector('.task__input')
const taskButtonClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = JSON.parse(localStorage.getItem('tasks_ls')) ?? []

console.log(tasks)

// let tasks = [
//   {
//     id: 'tarea-1',
//     title: 'Estudiar Javascript',
//     completed: true
//   },
//   {
//     id: 'tarea-2',
//     title: 'Salir al receso',
//     completed: false
//   },
//   {
//     id: 'tarea-3',
//     title: 'Resolver el reto de la semana',
//     completed: false
//   }
// ]

function saveTasksInLocalStorage(tasks = []) {
  localStorage.setItem('tasks_ls', JSON.stringify(tasks))
}

function renderTasks(tasks = []) {
  // console.log('Renderizando tasks...', tasks)

  // operador Ternario
  // false ? 'Verdadera' : 'False'

  let list = ''

  tasks.forEach(task => {
    console.log(task)
    list = list + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
          data-id="${task.id}"
          ${task.completed ? 'checked' : ''}
        />
        <div class="w-full ${task.completed ? 'line-through' : ''}">
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="task-item__edit border border-green-700 font-medium text-sm px-2 py-1 text-green-700 rounded-lg hover:bg-green-700 hover:text-white duration-300"
          >
            ✏
          </button>
          <button
            class="task-item__remove border border-red-700 font-medium text-sm px-2 py-1 text-red-700 rounded-lg hover:bg-red-700 hover:text-white duration-300"
            data-id="${task.id}"
            data-nombre="holaquetal"
          >
            ❌
          </button>
        </div>
      </li>
    `
  })
  

  taskList.innerHTML = list
}

// 01 - Al presionar enter en la caja de texto debemos agregar una nueva tarea a lista(arreglo tasks)
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // lógica para agregar una nueva tarea
    console.log(event.key) // El nombre de la tecla presionada

    // const value = event.target.value
    const { value } = event.target

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    tasks.push(newTask)

    renderTasks(tasks)

    taskInput.value = ''

    console.log(tasks)

    saveTasksInLocalStorage(tasks)
  }
})

taskList.addEventListener('click', (event) => {
  const { target } = event

  console.log(target.dataset)
  
  if(
    target.tagName === 'BUTTON' && 
    target.classList.contains('task-item__remove')
  ) {
    const { id } = target.dataset // Id que queremos eliminar

    console.log('Eliminando tarea...', id)

    tasks = tasks.filter(task => task.id !== id)

    renderTasks(tasks)

    saveTasksInLocalStorage(tasks)
  }

  // TODO: Al presionar el check debe completarse la tarea en el arreglo de tasks
  if (
    target.tagName === 'INPUT' && 
    target.type === 'checkbox'
  ) {
    console.log('Completando tarea...')

    const { id } = target.dataset // Id que queremos eliminar

    const taskSelectedIndex = tasks.findIndex(task => {
      return task.id === id
    })

    tasks[taskSelectedIndex] = {
      ...tasks[taskSelectedIndex],
      completed: !tasks[taskSelectedIndex].completed
    }

    renderTasks(tasks)

    console.log(tasks)

    saveTasksInLocalStorage(tasks)
  }
})

// TODO: Al hacer click en el botón 'Limpiar tareas completadas' debemos remover todas las tareas completadas. Hay que llamar al método render también.

taskButtonClear.addEventListener('click', (event) => {
  const incompletedTasks = tasks.filter(task => !task.completed)

  tasks = incompletedTasks

  renderTasks(tasks)

  saveTasksInLocalStorage(tasks)
})

renderTasks(tasks)