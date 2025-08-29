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

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False
// 4. Retornar True si un numero es par sino devolver False
// 5. Retornar True si un numero es impar sino devolver 
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%