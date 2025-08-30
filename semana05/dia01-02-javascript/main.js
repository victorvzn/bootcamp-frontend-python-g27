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
const listaConFunciones = [() => (console.log('Hola fn()'))]

console.log(arregloVacio)
console.log(arregloConNombres)
console.log(listaConValores)
console.log(listaConFunciones)


