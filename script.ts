// Función 1: Suma de dos números
function sumar(a: number, b: number): number {
    return a + b;
  }
  
  // Función 2: Saludo personalizado
  function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
  }
  
  // Función 3: Verificar si un número es par
  function esPar(numero: number): boolean {
    return numero % 2 === 0;
  }
  
  // Función 4: Obtener el primer elemento de un arreglo
  function primerElemento<T>(lista: T[]): T | undefined {
    return lista[0];
  }
  
  // Función 5: Convertir texto a mayúsculas
  function aMayusculas(texto: string): string {
    return texto.toUpperCase();
  }
  
  // --- Pruebas de las funciones ---
  console.log("Suma 5 + 3:", sumar(5, 3)); // 8
  console.log(saludar("Carlos")); // Hola, Carlos!
  console.log("¿4 es par?", esPar(4)); // true
  console.log("Primer elemento:", primerElemento([10, 20, 30])); // 10
  console.log("Mayúsculas:", aMayusculas("hola mundo")); // HOLA MUNDO
  