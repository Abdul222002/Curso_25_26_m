// .at <---- acceso con indices negativos

const frutas = ['manzana', 'banana', 'cereza', 'durazno'];
console.log(frutas.at(-1)); // 'durazno'
console.log(frutas.slice(-2)); // ['cereza', 'durazno']

// .splice <---- Se utiliza para modificar un array pero muta el original

frutas.splice(1,2); // Elimina 2 elementos a partir del índice 1
console.log(frutas); // ['manzana', 'durazno']

// .concat <---- Se utiliza para unir dos o más arrays y devuelve un nuevo array sin mutar el original

frutas.concat(['kiwi', 'mango']); // ['manzana', 'durazno', 'kiwi', 'mango']

const edades=[1,2,3,4,5,6];

const ArrayConcat=[...frutas,"aguacate",...edades];/// ESTA ES LA QUE HAY QUE USAR spread operator

// SET <---- Estructura de datos que almacena valores únicos, sin duplicados

const pesos=[4,5,3,2,1,4,5,3,2,1];
const sinDuplicados=[...new Set(pesos)]; // {1, 2, 3, 4, 5} ///SUPER IMPORTATNTE*****SPREAD OPERATOR

// .reduce <---- Se utiliza para reducir un array a un único valor, aplicando una función acumulativa a cada elemento del array

// pesos.reduce((acumulador, elemento, indice, array) => aqui va la logica,valorInicial);
// acumulador, elemento <--- NO SON OPCIONALES,NO MUTA EL ARRAY
pesos.reduce((suma,peso)=> suma + peso ,  0 );

// Realiza la multiplicacion de todos los elementos del array
pesos.reduce((producto,peso)=>producto*peso,1); 
// encontrar el maximo y el minimo en un array
pesos.reduce((maximo,peso)=>peso>maximo?peso:maximo,pesos[0]);
pesos.reduce((minimo,peso)=>peso<minimo?peso:minimo,pesos[0]);
// dado un array que sea [manzana,platano,manzana,manzana,platano,pera,pera] devolverme un objeto clave valor con nombre de la fruta: cuantas veces aparece el nombre de la fruta 
const frutas2=["manzana","platano","naranja","manzana","manzana","platano","pera","pera"];
frutas2.reduce((acumulador,fruta)=>{
    acumulador[fruta]=(acumulador[fruta]||0)+1;
    return acumulador;
} , {});
// Dado el siguiente array bidimensional,[1,2],[3,4],[5,6] aplanar dicho arrray en un array simple [1,2,3,4,5,6]





//Array de objetos.
const usuarios=[
    {id:1, nombre:"Ana", edad:25, data :{book:100}},
    {id:2, nombre:"Juan", edad:30, data :{book:50}},
    {id:3, nombre:"Pedro", edad:28, data :{book:20}},
    {id:4, nombre:"Maria", edad:22, data :{book:20}},
    {id:5, nombre:"Luis", edad:35, data :{book:80}},
    {id:6, nombre:"Lucia", edad:27, data :{book:0}},
];

//Dame la informacion del usuario cuyo nombre es JUAN
usuarios.find(usuario=>usuario.nombre.toLowerCase() === "juan"); 

//Dame todos lo usuarios que sean mayores o iguales a 28
let resultado=usuarios.filter(usuario=>Number(usuario.edad)>=28)??  {};


// Dado el siguiente array de usuarios, devolver un array con solo los nombre de los usuarios que tienen en su biblioteca mas de 20 libros
const usuario=usuarios.filter(usuario=>usuario.data.book>20).map(usuario=>usuario.nombre);
console.log(usuario);
// Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28$ 
const promedio=usuarios.map(usuario=>usuario.data.book *28).reduce((suma,precio)=>suma+precio,0);
console.log(promedio);
// Decidme que usuarios no tienen libros
const sinLibros=usuarios.filter(usuario=>Number(usuario.data.book===0)).map(usuario=>usuario.nombre);
console.log(sinLibros);
