/* 
# EJERCICIO 8
-Generar un objeto resumen de mi array que tenga los siguientes campos:

{
    valor: numero_correspondiente,
    posicion: posiocion_dentro_del_array,
    esUltimo: array_que_me_diga_si_es_el_ultimo (true|false)
}
*/


const numeros=[1,2,3,4,5];

const resumenNumeros=numeros.map((numero,indice,miArray)=>{
    return {
        valor : numero,
        posicion: indice,
        esUltimo: indice===miArray.length-1
    }
})

console.log(resumenNumeros); // array de objetos mapeados a una estuctura dada


const products=[
    {name :"laptop",price: 1000, stock :5, active: true},
    {name :"Mouse Logitech", price:28.56, stock :0, active: false}
];

/*Mapeado:
nombre
precionOriginal
precionConIva
hayStock
*/

const productWithVat =products.map((product)=>{
    return{
        nombre: product.name,
        originalPrice :product.price,
        priceWithVat: product.price*1.21,
        available: product.stock>0
    }
});

// filtrame los productos que tienen stock y estan activos

const productsAvailable= products.filter(product =>product.stock>0 && product.active);

//Mostrar todas la informacion de todos los laptop de forma case insensitive
const laptops= products.filter(product=>product.name.toLowerCase().includes("laptop"));

//  funcion que busque en el array de productos por un texto en concreto y me devuelva los productos que coincidan
function search(texto=""){
    return products.filter(product=>product.name.toLowerCase().includes(texto));
};

/**
 * -Buscar en un array de objetos por un texto en concreto
 * @param {Array<Object>} arrays - Array de objetos 
 * @param {string} texto - Texto a buscar
 * @returns - Array<Object> 
 */
const findProducts = (products=[], wordToFind) => products.filter(product => product.name.toLowerCase().includes(wordToFind.toLowerCase()));

//Crear una funcion que le pase como paramentro un array de productos, precio_inicial,precio_final
// y devuelva los productos cuyo precio este en ese rango de valores (sin incluirlos)
const filterPrice=(products=[],precio_inicial=0,precio_final=0)=>products.filter(product=>Number(product.price)>precio_inicial && Number(product.price)<precio_final);
// modificar findProducts para que ademas me muestre solo los que estan activos.


const carrito=[
    {
        name:"laptop",price:1000,quantity:5,category:"Electronica"
    },
    {
        name:"Mouse Logitech",price:28.56,quantity:1,category:"Electronica"
    },
    {
        name:"Monitor MSI 24",price:210.6,quantity:10,category:"Electronica"
    },
    {
        name:"Teclado Mecanico",price:150,quantity:2,category:"Electronica"
    },
    {
        name:"Camiseta",price:35,quantity:3,category:"Ropa"
    },
    {
        name:"Pantalon",price:60,quantity:4,category:"Ropa"
    }
];


// Calcular el precio total del carrito de la compra y con el iva incluido
/**
 * @commemt - Calcula el total del carrito con IVA incluido
 * @param {Object[]} carrito -Carrito de objetos
 * @param {number} vat- IVA a aplicar (por defecto 1.21 para un 21%)
 * @returns {number} - Total del carrito con IVA incluido
 */
const totalCart=(carrito=[],vat=1.21)=>carrito.map(producto=>producto.price*producto.quantity).reduce((suma,precio)=>suma+precio,0)*vat;

// Calcular el precio total del carrito de la compra con iva incluido y si la cantidad de un producto es mayor a 5 aplicar un descuento del 5% en ese producto
/**
 * @comment - Calcula el total del carrito con IVA incluido y aplica un descuento del 5% si la cantidad de un producto es mayor a 5
 * @param {Object[]} cart - Carrito de objetos
 * @param {number} vat - IVA a aplicar (por defecto 1.21 para un 21%)
 * @returns {number} - Total del carrito con IVA incluido y descuentos aplicados
 */
const discountedTotal=(cart=[],vat=1.21)=>cart.reduce((total,product)=>product.quantity>5? total + (product.price * product.quantity *0.95) : total + (product.price * product.quantity*vat),0);


//Agrupar el carritos por categorias
/*
{
    Electronica: [{...},{...}],
    Ropa: [{...},{...}]
}
*/


const productCategories= (carrito=[])=>
    carrito.reduce((groups,product)=>{
        const categoryFilter=product.category;
        if(!groups[categoryFilter]){
            groups[categoryFilter]=[];
        }
        groups[categoryFilter].push(product);
        return groups;
    },{});


const votos=["Ana","Juan","Pedro","Ana","Maria","Juan","Ana"];

//  Funcion a la que la paso un array de votos y cuenta cuantos votos tiene cada usuario
// {
//     Ana:3,
//     Juan:2,
//     Pedro:1,
//     Maria:1
// }
//  
const countVotes=(votes=[])=> votes.reduce((voteCount,vote)=>{
    voteCount[vote]=(voteCount[vote]||0)+1;
    return voteCount;
},{});



const users=[
    {id:1, nombre:"Ana", rol: "admin"},
    {id:2, nombre:"Juan", rol: "user"},
    {id:3, nombre:"Pedro", rol: "user"},
    {id:4, nombre:"Maria", rol: "admin"}
];


// funcion (arrayUsuarios,idBusqueda) --> devuelve el rol que tiene 
// que buscar el usuario id=2 y obtener el rol que tiene
const findUsers=(users=[],id=1)=>{
    return users.find((user)=>{
        if(user.id===Number(id)){
            return user.rol;
        }else{
            return "No encontrado";
        }
    });
}   



//Buscar el indice del array donde se encuentra el usuario con id buscado

const findUserIndex=(users=[],id=1)=> users.findIndex((user)=> Number(user.id)===Number(id));

// si no lo encuentra devuelve -1 o no encuentra la accion requerida
//************* some() ---> devuelve true o false si encuentra al menos un elemento que cumpla la condicion */
const numerosPares=[1,2,3,4,5,6];

// ¿Hay algun numero par en el array?
const hasEven=numerosPares.some(num=>num%2===0); // Esto devuelve true o false si esto devuelve algun numero 

