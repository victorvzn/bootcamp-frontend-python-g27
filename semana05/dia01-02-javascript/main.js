// COMENTARIOS

// console.log('Hola a todos')

/*
  Esto
  es
  un
  comentario
  de
  múltiples
  líneas
*/

// TIPOS DE DATOS

// https://developer.mozilla.org/es/docs/Web/JavaScript
// https://lenguajejs.com/javascript/

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt, Symbol...

// NUMBERS

console.log(20)
console.log(20.50)
console.log(-36)

console.log(typeof 20)
console.log(typeof 20.50)
console.log(typeof -36)

// STRING o Cadenas de texto

console.log('Gabriel')
console.log("Bryan")
console.log('500')

console.log(typeof 'Gabriel')
console.log(typeof "Bryan")
console.log(typeof '500')

// BOOLEAN -> verdadero(true) o falso(false)

console.log(true)
console.log(false)

console.log(typeof true)

// UNDEFINED, lo asigna javascript

let nombre // No hemos asignado un valor a la variable

console.log(nombre)
console.log(typeof nombre)

// NULL

// let apellido = undefined // ❌
let apellido = null

console.log(apellido)
console.log(typeof apellido)

// BigInt (Tipo de dato primitivo)
// Symbol (Tipo de dato primitivo)

// Object (Tipo de datos no primitivos)
// Function (Tipo de datos no primitivos)
// Array (Tipo de datos no primitivos)
// Set (Tipo de datos no primitivos)
// etc.


// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// var -> ES5 (Forma de declarar una variable pero no es recomdable su uso actualmente) ❌

// ECMASCRIPT 6 === ES6
// const, para valores fijos
// let, se usa cuando el valor cambia

// CONST -> ES6 (Si es recomendado usar actualmente)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 17
const PI = 3.14
const name = "Victor"
const estaCasado = true

// edad = 33 // ❌ Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (Si es recomendado usar actualmente)

let edad2 = 35 // Nota: no es obligatorio inicicializarlo

edad2 = "36" // Lo sobreescribo con un tipo de dato nuevo
edad2 = true
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(5 % 3) // Operador para obtener el residuo de una división
console.log(2 ** 3) //Dos elevado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADOR DE ASIGNACIÓN (=)

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuanta el tipo de dato al comparar sino solo sus valores.

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad estricta (===)
// Devuelve un valor booleano (true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar.

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPERADORES DE COMPARACIÓN, siempre devuelven un boolean

console.log(8 > 5) // true
console.log(5 < 1) // false
console.log(5 >= 1) // true
console.log(5 <= 1) // false

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// OPERADORES DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto  = 'Victor' + '@' + 'Villazón'
const miEdad = 39

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años.'

console.log(imprimirSaludo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length) // 6
console.log(cadena2.length) // 6

console.log(cadena1.length === cadena2.length) // true

// TODO: Resolver para mañana

// 2. Retornar true si un numero es menor que 40 sino devolver false
const unNumero = 28
console.log('EJERCICIO 2:', unNumero < 40)

// 3. Retornar True si un numero es menor que 60 sino devolver False
console.log('EJERCICIO 3:', 88 < 60)

// 4. Retornar True si un numero es par sino devolver False
console.log('EJERCICIO 4:', 8 % 2 === 0) // true

// 5. Retornar True si un numero es impar sino devolver 
console.log('EJERCICIO 5:', 7 % 2 !== 0) // true

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 10
const altura = 15
const area = (base * altura) / 2
console.log('EJERCICIO 6:', area)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF)

if(true) {
  // Se ejecuta este bloque si la condición es verdadera
}

const numero = 35

const esPar = numero % 2 === 0

if (esPar) {
  console.log('CONDICIONALES (IF)', 'Este número es par')
}

// CONDICIALES (IF, ELSE)

if(true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si la condición es falsa
}

if (esPar) {
  console.log('CONDICIONALES (IF, ELSE)', 'Este número es par')
} else {
    console.log('CONDICIONALES (IF, ELSE)', 'Este número es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si ninguna condición se cumple
}

let hero = 'Spiderman'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else { // Opcional
  console.log('No eres un heroe aun :(')
}

// CONDICIONALES (SWITCH)

hero = 'Batman'

switch (hero) {
  case 'Batman':
    console.log('Hola soy Bruce')
  break // Opcional
  case 'Spiderman':
    console.log('Hola soy Peter')
  break
  case 'Ironman':
    console.log('Hola soy Tony')
  break
  default: // Opcional
    console.log('No eres un heroe aun :(')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

// for(INICIALIZADOR, CONDICIÓN, CONTADOR)
for(let i = 0; i < 10; i = i + 1) {
  console.log('FOR', i)
}

// i = i + 1 ES EQUIVALENTE A i++

for(let i = 0; i < 10; i++) {
  console.log('FOR', i)
}

// WHILE

let j = 0 // CONTADOR

while (j < 10) {
  console.log('WHILE', j)

  j++ // ⚠ Cuidado con crear un bucle infinito
}

// DO WHILE

let k = 0

do {
  console.log('DO-WHILE', k)

  k++
} while(k < 10)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 39

if (edadPersona >= 18) {
  console.log('EJERCICIO 1', 'Mayor de edad')
} else {
  console.log('EJERCICIO 1', 'Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y la que vamos a reutilizar
}

// Ejecutar, aquitar estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy fullstack')
}

imprimirMiNombre()
imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre="Anónimo", apellido='') {
  // if (nombre === undefined) {
  //   nombre = 'Anónimo'
  // }

  console.log('Hola soy', nombre, apellido)
}

imprimirUnNombre() // Hola soy undefined
imprimirUnNombre("Oscar", 'Carhuachin') // Hola soy Oscar Carhuachin

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(39)
esMayorOMenorDeEdad(8)
esMayorOMenorDeEdad(17)

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1


// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }

  // FUNCION QUE NO RETORNO NADA === undefined
}

console.log(esMayorOMenorDeEdad(39)) // undefined

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }

  // FUNCION QUE NO RETORNO NADA === undefined
}

const resultado = esMayorOMenorDeEdadConRetorno(15)

console.log(resultado)

console.log(esMayorOMenorDeEdadConRetorno(25)) // Mayor de edad
console.log(esMayorOMenorDeEdadConRetorno(12)) // Menor de edad

// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

console.log(welcome.length)
console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())
console.log(welcome.trim()) // Remueve los espacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

console.log(avatar.concat('victorvzn')) // Hola @mevictorvzn
console.log(avatar.replace('me', 'victorvzn')) // Hola @victorvzn
console.log(avatar.slice(0, 5)) // Retorna una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf('script')) // 10


// TIPOS DE DATOS NO PRIMITIVOS (ARRAYS, OBJECTS)

// ARRAYS

// Un arreglo tien elementos de cualquier tipo de dato: cadena, números, booleans, null, undefined, funciones, arrays, objetos, etc.

const arregloVacio = []
const arregloConNombres = ['Victor', 'Liliana', 'Marcial', 'Mariana']
const listaConValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]

const listaConFunciones = [() => (console.log('Hola fn()')), '123', 999]

console.log(arregloVacio)
console.log(arregloConNombres)
console.log(listaConValores)
console.log(listaConFunciones)

// Lectura de los elementos de un arreglo

console.log(listaConValores[0]) // 1
console.log(listaConValores[4]) // Villazón
console.log(listaConValores[5]) // true
console.log(listaConValores[100]) // undefined
console.log(listaConValores[8][1]) // 7

listaConFunciones[0]() // Estamos ejecutando la función que está en el índice 0 del arreglo

// ¿Cómo sabemos la longitud de un arreglo?

console.log(arregloConNombres.length) // 4 elementos
console.log(listaConValores.length) // 9 elementos

//Escritura en arreglos

listaConValores[0] = 'Fiorella'
listaConValores[4] = 'Jimenez'

console.log(listaConValores)

// OPERACIONES SOBRE LOS ARREGLOS

// Insertar nuevos elementos al final del arreglo

arregloConNombres.push('Javascript')
arregloConNombres.push('CSS')

console.log(arregloConNombres)

// Remover elementos del final del arreglo

arregloConNombres.pop()

console.log(arregloConNombres)

// Insertar un elemento en una posición determinada

const arr = [...arregloConNombres] // Copia o Clone del arregloConNombres

console.log(arr)
arr.splice(1, 0, 'HTML')
console.log(arr)
console.log(arregloConNombres) // Queda intacto

// Eliminar un elemento

console.log(arregloConNombres) // ['Victor', 'HTML', 'Liliana', 'Marcial', 'Mariana', 'Javascript']
arregloConNombres.splice(2, 1)
console.log(arregloConNombres) // ['Victor', 'Liliana', 'Mariana', 'Javascript']

// Otras funciones: slice (Investiguen)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Split y join para cadenas

console.log('frutas'.split(''))
console.log('frutas'.split('').join(','))


// EJERCICIOS

// EJERCICIO: Lista de Invitados

// Tienen un arreglo con los nombres de las personas invitadas a una fiesta.

// 01 - Declara el arreglo con 5 nombres.
let invitados = ["Ana", "Luis", "María", "Pedro", "Carla"];

// 02 - Muestra en consola todos los nombres.
// 03 - Agrega un nuevo invitado al final de la lista.
// 04 - Inserta un invitado al inicio de la lista.
// 05 - Elimina al último invitado de la lista.
// 06 - Elimina al primer invitado de la lista.
// 07 - Muestra cuántos invitados hay actualmente.
// 08 - Reemplaza el segundo invitado de la lista por otro nombre.


// EJERCICIOS DE ALGORITMOS

// 1. Encontrar el mayor número
// Dado un arreglo de números, encuentra el número más grande sin usar Math.max.

// 2. Contar pares e impares
// Dado un arreglo de números, muestra cuántos son pares y cuántos son impares.

// 3. Invertir un arreglo
// Dado un arreglo, crea otro arreglo con los elementos en orden inverso sin usar .reverse().
// 👉 Pista: usa un bucle desde el final hacia el inicio.

// 4. Buscar un elemento
// Pide un nombre y verifica si está en el arreglo de invitados.
// Si está, muestra el índice donde se encuentra; si no, indica que no existe.

// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.
// 👉 Pista: usa un arreglo auxiliar y verifica antes de insertar.

// 6. Palíndromo con arreglos
// Verifica si una palabra es palíndroma (se lee igual al derecho y al revés).
// 👉 Pista: conviértela en arreglo de letras y compárala con su inverso.

// 7. Suma de todos los elementos
// Dado un arreglo de números, calcula la suma total de sus elementos sin usar reduce.
// 👉 Pista: acumula con un for.

// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.

// 9. Ordenar un arreglo (básico)
// Ordena un arreglo de números de menor a mayor sin usar .sort().
// 👉 Pista: algoritmo de burbuja (intercambiar elementos si están desordenados).

// 10. Intercalar dos arreglos
// Dado dos arreglos [1,2,3] y ['a','b','c'], crea uno nuevo: [1,'a',2,'b',3,'c'].
// 👉 Pista: usa un for que recorra en paralelo.

// TODO: Investiguen cada uno de los métodos de arreglos que muestro en la siguiente línea

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, etc.)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

// Método INCLUDES, verifica si existe cierto valor(tipo de dato) en un arreglo y devuelve un resultado booleano(true o false)

console.log('INCLUDES', languages.includes('java')) // true
console.log('INCLUDES', languages.includes('cobol')) // false
console.log('INCLUDES', languages.includes('PYTHON')) // false

// Método MAP, devuelve un arreglo y modifica cada elemento pasando una función(callback)
// El map siempre devuelve un arreglo nuevo

const nombresConAsterisco = languages.map(function(language) {
  return language + '*'
})

console.log(languages) // Este arreglo no cambia

console.log(nombresConAsterisco)

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un nuevo arreglo con los resultados

const filteredLanguages = languages.filter(
  function (language) {
    // return false
    // return language === 'java'
    // return language === 'python'
    // return language.includes('c')
    return language.toLowerCase().includes('c')
  }
)

console.log(filteredLanguages)
console.log(languages)

// EJERCICIO: Análisis de compras
// Tienes un arreglo con los nombres de productos que un cliente compró en una tienda:

const compras = [
  "manzana",
  "pan",
  "leche",
  "manzana",
  "queso",
  "huevo",
  "pan",
  "jugo",
  "manzana"
];

// Resuelve lo siguiente:

// includes: Verifica si el cliente compró "queso".
console.log()
// filter: Crea un nuevo arreglo que contenga solo las manzanas que se compraron.
console.log()
// reduce: Cuenta cuántos productos en total compró el cliente.
console.log()

// Método REDUCE, nos ayuda a tomar los valores de un arreglo y sumarlos

const numeros = [3, 40, 100, 7, 50]

let acumulador = 0

for (let i=0; i < numeros.length; i++) {
  acumulador = acumulador + numeros[i]
}

console.log(acumulador)

// Vamos a usar reduce

const sumatoria = numeros.reduce(
  function(acumulador, valorActual) {
    return acumulador + valorActual
  },
  0
)

console.log(sumatoria)

// Método SORT y TOSORTED, nos ayuda a ordenar un arreglo de elementos.
// ⚠ Muta el arreglo original. Ordena cadenas de texto.

// [...languages]: esta sintaxis copia el arreglo original en un nuevo arreglo

const copiaDeLanguages = [...languages]
const ordenandoLanguages = copiaDeLanguages.sort()

const ordenandoLanguagesMejorado = languages.toSorted()

console.log(ordenandoLanguages)
console.log(ordenandoLanguagesMejorado)
console.log(languages)

const edades = [25, 12, 10, 89, 32, 81, 3]

const ordenandoEdadesAsc = [...edades].sort(function(a, b) {
  // Si el resultado es negativo -> a va antes que b
  // Si el resultado es positivo -> b va antes que a
  // Si es 0 -> son iguales
  return a - b
})

const ordenandoEdadesDesc = [...edades].sort(function(a, b) {
  return b - a
})

console.log(ordenandoEdadesAsc)
console.log(ordenandoEdadesDesc)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningún retorno de datos

const miArreglo = []

languages.forEach(
  function(language, index) {
    if (index > 3) {
      miArreglo.push('hola--' + language)
    }
  }
)

console.log(miArreglo)

// OBJETOS

/*
  {
    KEY: VALUE,
    KEY2: VALUE2,
    KEY3: VALUE3
  }
*/

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  edad: 37,
  esMayorDeEdad: true,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  'mi edad': 39,
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    },
    {
      nombre: 'Algoritmos',
      nota: 13
    }
  ],
  devolverCursosAprobados: function() {
    return this.cursos.filter(function(curso) {
      return curso.nota > 13
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // 37

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list
console.log(miObjeto['mi edad']) // OK ✅

console.log(miObjeto.coloresFavoritos) // ['rosado', 'rojo', 'azúl']
console.log(miObjeto.coloresFavoritos[2]) // azúl

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1].nota)  // 13 con la notación de punto
console.log(miObjeto.cursos[1]['nota']) // 13 con la notación de corchete

console.log(miObjeto.devolverCursosAprobados)
console.log(miObjeto.devolverCursosAprobados())

// ELIMINAR PROPIEDADES DE UN OBJETO

const copiaDeMiObjeto = {...miObjeto}

delete copiaDeMiObjeto.colorFavorito
delete copiaDeMiObjeto.cursos
delete copiaDeMiObjeto['mi edad']

console.log(copiaDeMiObjeto)
console.log(miObjeto)

// Otra forma de eliminar el valor de un objeto

copiaDeMiObjeto.esMayorDeEdad = undefined

console.log(copiaDeMiObjeto)

// Insertar una nueva propiedad a un objeto

miObjeto.platilloFavorito = 'Ceviche de Conchange negras'
miObjeto['juegos$favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// Ejercicio: Manejos de las frutas

const frutas = [
  { nombre: "manzana", precio: 2, cantidad: 10 },
  { nombre: "banana", precio: 1, cantidad: 0 },
  { nombre: "naranja", precio: 1.5, cantidad: 5 },
  { nombre: "kiwi", precio: 3, cantidad: 2 },
  { nombre: "uva", precio: 2.5, cantidad: 20 }
]

// 1. includes → ¿tenemos "kiwi"?
const nombresFrutas = frutas.map(function(fruta) {
  return fruta.nombre
})

console.log('1. ¿tenemos "kiwi"?', nombresFrutas.includes('kiwi'))

// 2. map → obtener solo los precios

// 3. filter → frutas con stock disponible
const stockDisponible = frutas
  .filter(function(fruta) {
    return fruta.cantidad > 0
  })
  // .map(function(fruta) {
  //   return fruta.nombre
  // })
console.log('3. stock disponible', stockDisponible)

// 4. reduce → calcular el valor total del inventario

// 5. every → ¿todas las frutas tienen precio mayor a 0?

// 6. some → ¿hay alguna fruta sin stock?


// DESTRUCTURING DE ARREGLOS, OBJETOS
// Una forma de extraer las propiedades/elementos de un objeto o un arreglo en nuevas variables

// Sin destructuring

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

// Con destructuring

const { platilloFavorito, colorFavorito, cursos } = miObjeto

console.log(platilloFavorito, colorFavorito, cursos)

// Alias en destructuring de objetos

const {
  platilloFavorito: platilloFavoritoValor,
  colorFavorito: colorFavoritoValor,
  cursos: cursosValor
} = miObjeto

console.log(platilloFavoritoValor, colorFavoritoValor, cursosValor)

// DESTRUCTURING EN ARRAYS

const amigos = ['leo', 'marcial', 'diego', 'andrea', 'victor']

const [amigo1, amigo2, , amigo3] = amigos

console.log(amigo1, amigo2, amigo3)

// DESTRUCTURING + SPREAD OPERATOR (...)

const [miMejorAmigo, ...losDemas] = amigos

console.log(miMejorAmigo, losDemas)

// SPREAD OPERADOR EN OBJETOS

// Extrae los propiedades de un objeto/arreglo para reutlizarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 7599,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Gabriel',
  isVip: true
}

console.log(producto + cliente) // ❌ 😵 💔 [object Object][object Object]

const nuevoObjeto2 = { ...producto, ...cliente }

console.log(nuevoObjeto2) // el nombre del producto fue sobreescrito ❓ CUIDADO

// SPREAD OPERATOR EVITANDO "COLISIONES DE PROPIEDADES"

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente },
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.producto.nombre)
console.log(nuevoObjetoSinColisiones.cliente.nombre)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves(keys) del objeto
console.log(Object.values(producto)) // Obtenemos solo las valores(values) del objeto
console.log(Object.entries(producto)) // Convertimos un objeto en un arreglo y lo que devuelve es un arreglo de arreglos


// ES6+ -> ECMASCRIPT 2025 (Es el standard)

// Arrow function, let, const, template strings, destructuring, clases, modulos, promesas

// ARROW FUNCTION: () => {}

// function nombreDelaFuncion(parametro1, parametro2) {
//   return 'Hola a todos'
// }

// nombreDeLaFuncion()

// Funciones con parámetros en un línea

const imprimirSaludoArrowFn = () => console.log('Hola a todos nuevamente!')

imprimirSaludoArrowFn()

// Funciones con parámetros en un línea con retorno implícito

const sumaArrowFn = (numero1, numero2) => numero1 + numero2

console.log(sumaArrowFn(2, 5))

// Funciones con parámetros y retorno explícito en múltiples líneas con retorno explícito

const saludoEnMayusculasArrowFn = (nombre) => {
  const nombreEnMayuscula = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayuscula + '!!'
}

console.log(saludoEnMayusculasArrowFn('victor'))

// Funciones con parámetros por defecto y retorno explícito en múltiples líneas

const otroSaludoEnMayusculasArrowFn = (nombre='Anónimo') => {
  const nombreEnMayuscula = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayuscula + '!!'
}

console.log(otroSaludoEnMayusculasArrowFn())
console.log(otroSaludoEnMayusculasArrowFn('victor'))

// Template strings (template literals) 
// Otra forma de crear cadenas de texto
// backticks (`)

const unNombre = 'Victor'
const unaEdad = 39

// const mensaje = 'Hola, me llamo ' + unNombre + ' y tengo ' + unaEdad + ' años.'
const mensaje = `Hola, me llamo ${unNombre}
y tengo ${unaEdad} años.
Y la suma de 49 + 96 es ${49 + 96}.`

console.log(mensaje)

// Parámetros rest (operador rest -> ...)

const listaDeNumeros = [4, 5]

function miSuma(n1, n2) {
  return n1 + n2
}

console.log(miSuma(4, 5)) // 9
console.log(miSuma(listaDeNumeros)) // ❌ 4,5undefined
console.log(miSuma(...listaDeNumeros)) // 9

// Otro ejemplo 

const listaDeNumeros2 = [25, 8, 288, 65, 76, 189, 66]

console.log(Math.max(25, 8, 88, 65, 99, 828)) // 828
console.log(Math.max(listaDeNumeros2)) // NaN
console.log(Math.max(...listaDeNumeros2)) // 288

