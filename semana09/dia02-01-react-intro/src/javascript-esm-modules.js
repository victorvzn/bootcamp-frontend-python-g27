// ESM (ECMAScript Modules)

// Es una forma moderna de organizar y reutilizar código en javascript

// En lugar de tener todo en un archivo grande, podemos dividir en módulos(archivos separados) y compartir funciones, variables, etc

// <script type="module" src="main.js"></script>

// Exportación nombrada

export function sumar(a, b) {
  return a + b
}

export const PI = 3.1415


// Exportación por defecto

export default function() {
  console.log('Soy la expotación por defecto')
}