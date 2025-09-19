//Primer ejercicio de JavaScript
console.log("Hola Mundo");
///------------------Declarar variables------------------///


///------------------Declarar la función suma------------------///
/*
Crea una función suma que reciba dos parámetros y devuelva la suma de ambos.
Parametros:
    -a: número 1
    -b: número 2
    retorna: la suma de a y b
*/
/**
 * Suma dos números y devuelve el resultado.
 * @param {number} [a =0] -primer número a sumar con valor por defecto 0
 * @param {number} [b =0] -segundo número a sumar con valor por defecto 0
 * @returns {number} -La suma de a y b
 */
function suma(a=0, b=0) {
    return a + b;
}

//------------------inicializar las apliacines------------------///

suma(5,7)

console.log(suma(5, 3));
console.log(suma(5));
console.log(suma());