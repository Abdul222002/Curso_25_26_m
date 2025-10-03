//EJERCICIO: destructuring profundo

import { productos } from "../data/data";
import { extraerData } from "../helpers/myFuctions";

// Crear ua funcion que extraiga los datos del objeto y me devuelva la siguiente estructura:
//nombre,fabricante{nombre,contacto},especificaciones(solo la ram)
//imaginemos un array de productos. Usando la nueva especificacion obtener el nombre del producto con mas ram


/// ------------INICIO DE LA APLICACION----------------

const newDataArray=(arrayProducts=[])=>{
    return arrayProducts.map(product=>extraerData(product));
}

console.log(newDataArray(productos));