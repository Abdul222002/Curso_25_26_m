
/**
 * @param {Object} products - Objecto Data 
 * @returns {Object} -Object Products- Objeto con la nueva estructura
 */
export const extraerData=(products)=>{
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante
            ,contacto},
        especificaciones:{ ram }
    }=products;

    return {
        nombre,
        nombreFabricante,
        contacto,
        ram
    };
}


// Añadir una funcion de helpers llamada maxRam que le pase 
// como parametro un array de productos y me devuelva el nommbre del producto con mas maxRam

export const maxRam=(arrayProducts=[])=>{
    return arrayProducts.map(extraerData).reduce((max,actual)=>{
        
    },0).nombre;
}