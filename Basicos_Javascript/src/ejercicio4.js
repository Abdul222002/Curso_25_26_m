// Usos de los arrays
// DECLARACION:

const edades=[];
const frutas=["manzana","pera","platano","naranja"];

// USANDO EL CONSTRUCTOR DE ARRAYS
const cp= new Array();

const cc= new Array("asdasda","asdasd","asdasds");

frutas[0]; //manzana

//AÑADIR
edades.push(25); //añade un nuevo valor al final del array
edades.unshift("5"); //añade un nuevo valor al principio del array
//ELIMINAR
edades.pop(); //elimina el ultimo elemento del array y devuelve su valor
edades.shift(); //elimina el primer elemento del array y devuelve su valor

//**** slice, sirve para extraer partes de un array */

edades.slice(0,2); //extrae desde la posicion 0 hasta la 2 pero sin incluirla

// ********** map,una funcion que se le pasa como parametro otra funcion se le llama callback
edades.map((edad)=>{edad*2}); //devuelve un nuevo array con los valores modificados

// ********** filter, filtra los elementos de un array segun una condicion
edades.filter((edad,i)=> {
    console.log(i);
    return edad>=18}); //devuelve un nuevo array con los valores que cumplen la condicion