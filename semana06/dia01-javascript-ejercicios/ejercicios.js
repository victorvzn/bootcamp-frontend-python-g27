// TODO: Resolver los siguientes ejercicios para el siguiente jueves y compartir conmigo su repositorio con la solución.

// Ejercicio 1: Contar vocales
// Descripción: Retorna cuántas vocales contiene un texto dado, sin importar mayúsculas.
// Ejemplos:
// contarVocales('Hola Mundo') → 4
// contarVocales('AEIOU') → 5
// contarVocales('xyz') → 0
// contarVocales('Programación') → 5

function contarVocales(texto) {
  // return texto.split('')
  return [...texto.toLowerCase()]
    .filter(function(vocal) {
      return 'aeiouáéíóú'.includes(vocal)
    })
    .length;
}

console.log(contarVocales('Hola Mundo'))
console.log(contarVocales('AEIOU'))
console.log(contarVocales('xyz'))
console.log(contarVocales('Programación'))

// Ejercicio 2: Eliminar duplicados
// Descripción: Elimina elementos duplicados de un array manteniendo el orden.
// Ejemplos:
// eliminarDuplicados([1,2,2,3]) → [1,2,3]
// eliminarDuplicados(['a', 'b', 'a']) → ['a','b']
// eliminarDuplicados([]) → []
// eliminarDuplicados([true, false, true]) → [true, false]

function eliminarDuplicados(arr = []) {
  return arr;
}


// Ejercicio 3: Invertir texto
// Descripción: Invierte una cadena de texto.
// Ejemplos:
// invertirTexto('hola') → 'aloh'
// invertirTexto('123') → '321'
// invertirTexto('') → ''

function invertirTexto(texto = '') {
  return texto;
}


// Ejercicio 4: Sumar array
// Descripción: Retorna la suma total de todos los números en un array.
// Ejemplos:
// sumarArray([1,2,3]) → 6
// sumarArray([]) → 0
// sumarArray([-1, 1]) → 0

function sumarArray(arr = []) {
  return 0;
}


// Ejercicio 5: Celsius a fahrenheit
// Descripción: Convierte grados Celsius a Fahrenheit.
// Ejemplos:
// celsiusAFahrenheit(0) → 32
// celsiusAFahrenheit(100) → 212
// celsiusAFahrenheit(-40) → -40

function celsiusAFahrenheit(c = 0) {
  return c;
}


// Ejercicio 6: Es palindromo
// Descripción: Retorna true si un texto es un palíndromo (ignora espacios y mayúsculas).
// Ejemplos:
// esPalindromo('Anita lava la tina') → true
// esPalindromo('Hola') → false
// esPalindromo('A man a plan a canal Panama') → true

function esPalindromo(texto = '') {
  return false;
}


// Ejercicio 7: Elementos en Común
// Descripción: Retorna un array con los elementos en común entre dos arrays (sin repetir).
// elementosEnComun([1,2,3], [2,3,4]) → [2,3]
// elementosEnComun(['a','b'], ['b','c']) → ['b']
// elementosEnComun([], [1,2]) → []
// elementosEnComun([true], [true, false]) → [true]

function elementosEnComun(arr1 = [], arr2 = []) {
  return [];
}


// Ejercicio 8: Mayor número
// Descripción: Retorna el número más grande de un array de números.
// Ejemplos:
// mayorNumero([1, 5, 3]) → 5
// mayorNumero([-1, -5, -3]) → -1
// mayorNumero([42]) → 42

function mayorNumero(arr = []) {
  return -1;
}


// Ejercicio 9: Repetir texto
// Descripción: Repite un texto N veces separados por espacio.
// Ejemplos:
// repetirTexto('Hola', 3) → 'Hola Hola Hola'
// repetirTexto('JS', 1) → 'JS'
// repetirTexto('Bye', 0) → ''

function repetirTexto(texto = '', veces = 1) {
  return texto;
}


// Ejercicio 10: Capitalizar
// Descripción: Convierte la primera letra de un texto en mayúscula.
// Ejemplos:
// capitalizar('hola') → 'Hola'
// capitalizar('javaScript') → 'JavaScript'
// capitalizar('') → ''

function capitalizar(texto = '') {
  return texto;
}


// Ejercicio 11: Filtrar pares
// Descripción: Retorna un nuevo array con solo los números pares del array original.
// Ejemplos:
// filtrarPares([1,2,3,4]) → [2,4]
// filtrarPares([5,7,9]) → []
// filtrarPares([0, 10, 15]) → [0, 10]

function filtrarPares(arr = []) {
  return arr;
}


// Ejercicio 12: Contar palabras
// Descripción: Cuenta cuántas palabras tiene una frase (separadas por espacios).
// Ejemplos:
// contarPalabras('Hola mundo JS') → 3
// contarPalabras('') → 0
// contarPalabras(' Uno dos tres ') → 3

function contarPalabras(frase = '') {
  return 0;
}


// Ejercicio 13: Reemplazar palabra
// Descripción: Reemplaza una palabra específica por otra dentro de una frase.
// Ejemplos:
// reemplazarPalabra('Me gusta el café', 'café', 'té') → 'Me gusta el té'
// reemplazarPalabra('Hola mundo', 'mundo', 'JS') → 'Hola JS'
// reemplazarPalabra('La casa es blanca', 'blanca', 'roja') → 'La casa es roja'

function reemplazarPalabra(frase = '', buscar = '', reemplazar = '') {
  return frase;
}


// Ejercicio 14: Limpiar array
// Descripción: Elimina todos los valores falsy de un array.
// Ejemplos:
// limpiarArray([0, 1, false, 2, '', 3]) → [1, 2, 3]
// limpiarArray([null, undefined, NaN, 4]) → [4]
// limpiarArray(['a', '', 'b']) → ['a', 'b']  

function limpiarArray(arr = []) {
  return arr;
}


// Ejercicio 15: Generar rango
// Descripción: Genera un array del 1 al número dado (inclusive).
// Ejemplos:
// generarRango(3) → [1, 2, 3]
// generarRango(1) → [1]
// generarRango(0) → []

function generarRango(n = 0) {
  return [];
}


// Ejercicio 16: Caracter frecuente
// Descripción: Retorna el carácter que más veces aparece en un texto (ignora espacios).
// Ejemplos:
// caracterFrecuente('aabbbc') → 'b'
// caracterFrecuente('xyz xyz') → 'x'
// caracterFrecuente('aa bb cc dd') → 'a'

function caracterFrecuente(texto = '') {
  return '';
}


// Ejercicio 17: Contar ocurrencias
// Descripción: Cuenta cuántas veces aparece cada palabra en una frase y devuelve un objeto.
// Ejemplos:
// contarOcurrencias('hola hola mundo') → { hola: 2, mundo: 1 }
// contarOcurrencias('a b a b c') → { a: 2, b: 2, c: 1 }
// contarOcurrencias('') → {}

function contarOcurrencias(frase = '') {
  return {};
}


// Ejercicio 18: Obtener longitudes
// Descripción: Retorna un array con las longitudes de cada palabra en un texto.
// Ejemplos:
// obtenerLongitudes('Hola mundo JS') → [4, 5, 2]
// obtenerLongitudes('a bc def') → [1, 2, 3]
// obtenerLongitudes('') → []

function obtenerLongitudes(texto = '') {
  return [];
}


// Ejercicio 19: Promedio array
// Descripción: Calcula el promedio de un array de números.
// Ejemplos:
// promedioArray([2, 4, 6, 8]) → 5
// promedioArray([10]) → 10
// promedioArray([]) → 0

function promedioArray(arr = []) {
  return 0;
}


// Ejercicio 20: Texto a lista
// Descripción: Convierte una cadena separada por comas en un array limpio y sin espacios extra.
// Ejemplos:
// textoALista(' manzana, pera , uva') → ['manzana', 'pera', 'uva']
// textoALista('a,b,c') → ['a', 'b', 'c']
// textoALista('') → []

function textoALista(texto = '') {
  return [];
}