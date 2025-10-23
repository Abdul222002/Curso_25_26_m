//primitivos en TypeScript

// 1.- String 
let nombre:string="Abdul Hakim";
let cp:string="28080";
let mensaje:string=`El nombre es ${nombre} y el cp es ${cp}`;

function procesartexto(texto:string):string{
    return texto.trim().toUpperCase(); 
};

//console.log(procesartexto(mensaje));
let saludo = "Que tal todo"; // Declaracion con inferencia de TIPOS
procesartexto(saludo);

// 2.- Number
// CalcularPrecioFinal(precio,impuesto,descuento) me retornara el precio final con el impuesto y el descuento aplicado
function calcularPrecioFinal(precio:number,impuesto:number,descuento:number):number{
    let precioFinal:number=precio+(precio*impuesto/100)-(precio*descuento/100);// 21,3 
    return precioFinal;
}

console.log(calcularPrecioFinal(80,21,3));

// Cualquier tipo any (No usar salvo que sea estrictamente necesario)
// function que verifique que lo que pase como parametro es un numero
// No es infinito, !isNaN

function esNumero(numero:any):boolean{
    return typeof numero === 'number' && !isNaN(numero) && isFinite(numero);
};

esNumero(23);
esNumero("23");

//Calcular el promedio total de los elementos de un array de numeros
function calcularPromedio(numeros:number[]):number{
    if(numeros.length===0){
        throw new Error("El array de numeros esta vacio");
    }
    const suma:number=numeros.reduce((acum,numero)=>acum+numero,0);
    return suma/numeros.length;
}

function calcularExtremos(numeros:number[]):{min:number, max:number}{
    if(numeros.length===0){
        throw new Error("El array de numeros esta vacio");
    }
    const min:number=Math.min(...numeros);
    const max:number=Math.max(...numeros);
    return {min,max};
}

// 3.- Boolean
// Comprobar si un email es correcto o no. 
// esValidoEmail que se le pase un string y diga si es correcto o no
function esValidoEmail(email:string):boolean{
    // hakimbyaz@ejemplo.com . y espacion son caracteres especiales hay que 
    // escaparlos con \. \s
    const emailRegex: RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

esValidoEmail("hakimbyaz@ejemplo.com");

// interface tipo de dato generado por el usuario para una determinada situacion
interface permisosUsuario{
    puedeLeer: boolean,
    puedeEscribir: boolean,
    puedeBorrar: boolean
};

// Crear una funcion llamada obternerPermisos que dependiendo del rol del usuario(administrador,usuario o invitado ) cambie los permisos de la interface
type tipoUsuario = 'administrador' | 'usuario' | 'invitado';

//type permite crear un tipo de dato entre unos valores de datos.
function obtenerPermisos(usuario:tipoUsuario):permisosUsuario{
    switch (usuario) {
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir: false,
                puedeBorrar: false
            }
        case "usuario":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: false
            }
        case "administrador":
            return {
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: true
            }
        default:
            return {
                puedeLeer: false,
                puedeEscribir: false,
                puedeBorrar: false
            };
    }
}

obtenerPermisos("usuario");


// 4.- Null y Undefined

let posibleNombre:string | null="Invitado";

let posibleNombreIndefinido:string | undefined=undefined;


// arrow funcion
const duplicar=(numero:number):number=>{
    return 2*numero;
}

//Crear una funcion que le pase como parametro un array de objetos y me devuelva los usuarios que son mayor de edad
const usuarios=[
    {nombre:"Hakim",edad:25},
    {nombre:"Ana",edad:17},
    {nombre:"Luis",edad:30},
    {nombre:"Maria",edad:15}
];

const filtrarMayoresEdad=(usuarios: {nombre: string, edad: number}[]): {nombre: string, edad: number}[]=>{
    return usuarios.filter(usuario=>usuario.edad>=18);
}



const misNumeros:number[]=[1,-3,5,7,-9,12,15,-4,50,54];
//funcion procesarNumeros que cree devuelva un array de numeros solo positivos, multiplicados opr 2 y ordenados de menor a mayor

const procesarNumeros = (numeros: number[]): number[] => {
    return numeros
    .filter(numero=> numero > 0)
    .map(numero=> numero * 2)
    .sort((a,b)=> b-a)   
}
// ejercicio
interface Cliente{
    id:number;
    nombre:string;
    email:string;
    telefono:string;
}

// Crear una funcion que genere un map con la siguiente estructura
/*
{
    idUsuario:{
        nombre: string,
        email: string,
        telefono: string
    }
}
*/  

const clientes:Cliente[]=[
    {id:1,nombre:"Hakim",email:"hakim@ejemplo.com",telefono:"123456789"},
    {id:2,nombre:"Ana",email:"ana@ejemplo.com",telefono:"987654321"},
    {id:3,nombre:"Luis",email:"luis@ejemplo.com",telefono:"456789123"},
    {id:4,nombre:"Maria",email:"maria@ejemplo.com",telefono:"321654987"},
    {id:5,nombre:"Carlos",email:"carlos@ejemplo.com",telefono:"789456123"},
    {id:6,nombre:"Lucia",email:"lucia@ejemplo.com",telefono:"159753486"},
    {id:7,nombre:"Jorge",email:"jorge@ejemplo.com",telefono:"321321321"},
    {id:8,nombre:"Sofia",email:"sofia@ejemplo.com",telefono:"654987321"},
    {id:9,nombre:"Diego",email:"diego@ejemplo.com",telefono:"987654321"},
    {id:10,nombre:"Elena",email:"elena@ejemplo.com",telefono:"321321321"}
];



const generarMapaClientes=(clientes:Cliente[]):Map<number,{nombre:string,email:string,telefono:string}>=>{
    const mapaClientes=new Map<number,{nombre:string,email:string,telefono:string}>();
    clientes.forEach(cliente=>{
        mapaClientes.set(cliente.id,{
            nombre:cliente.nombre,
            email:cliente.email,
            telefono:cliente.telefono
        });
    });
    return mapaClientes;
};


// Calculadora simple, Crear una calculadora tipada que realice operaciones basicas para ello partimos de un
// interface operacion formada por tipo(sumar,restar,multiplicar,dividir),
// segundo elemento operando1 y operando2
// crearemos la funcion Calculadora que le pasaremos como parametro una operacion y nos devolvera el resultado de la operacion.
//Probarlo con 10,5 y otra 10,0.
//¿Se podria ampliar a otras operaciones?