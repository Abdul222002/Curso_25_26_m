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

function saludar(nombreUsuario){
    return `Bienvenid@ ${nombreUsuario ?? "Usuario"}`;
}

//------------------inicializar las apliacines------------------///

let nombre;
console.log(saludar(nombre));

//funcion aprobados que le pase por parametro un numero y diga si estoy aprobado o no aprobado.
// crear una version 2.o que si le paso un numero >=9 diga sobresaliente, 
// si esta entre 5-9 aprobado, si es <5 suspenso

//function aprobados(nota){

//}

// const aprobados= (nota=0) => {
//     return nota>=5 ? "Aprobado" : "Suspenso";
// }

const aprobados= (nota=0) => nota>=5 ? "Aprobado" : "Suspenso"
const aprobadosV2= (nota=0) => nota>=9 ? "sobresaliente" : nota>=5 ? "Aprobado" : "Suspenso";
console.log(aprobados(9));