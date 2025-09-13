const taskInput = document.querySelector('.task__input')
const taskButtonClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

const tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar Javascript',
    completed: true
  },
  {
    id: 'tarea-2',
    title: 'Salir al receso',
    completed: true
  },
  {
    id: 'tarea-3',
    title: 'Resolver el reto de la semana',
    completed: false
  }
]

function renderTasks(tasks = []) {
  // console.log('Renderizando tasks...', tasks)

  let list = ''

  tasks.forEach(task => {
    console.log(task)
    list = list + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input type="checkbox" />
        <div class="w-full">
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="border border-green-700 font-medium text-sm px-2 py-1 text-green-700 rounded-lg hover:bg-green-700 hover:text-white duration-300"
          >
            ✏
          </button>
          <button
            class="border border-red-700 font-medium text-sm px-2 py-1 text-red-700 rounded-lg hover:bg-red-700 hover:text-white duration-300"
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

    
  }

})

renderTasks(tasks)