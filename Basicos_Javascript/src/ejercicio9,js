//OBJETOS EN JAVASCRIPT

const usuario={
    name: "Abdul",
    email: "abdul@example.com",
    active:true
}

//Para las claves:

const claves=Object.keys(usuario); //["name","email","active"]

//Utilidad verificar si las claves estan todas siguiendo un objeto de partida

//1.- ¿Como compruebo que todas las claves existen?

function validarCamposRequeridos( objeto,camposRequeridos){
    const clavesObjeto=Object.keys(objeto);
    //Retorno verdadero o false
    return camposRequeridos.every((campo)=>{
        return clavesObjeto.includes(campo);
    });

}

const esValido=validarCamposRequeridos(usuario,["name","email","password"]); //false

//Para obtener los valores

const producto={
    name: "laptop",
    stock: 100,
    precio:1100,
    destacado:true
}

const valores=Object.values(producto); //["laptop",100,1100,true]

// verificar si algun valor cumple una condicion:

const precipitaciones={
    enero:110,
    febrero:80,
    marzo:120,
    abril:90
}


//¿Hay algun mes con precipitaciones superiores a 100l?

const mesSuperiorCien=Object.values(precipitaciones)
    .some((precipitacion)=>{
        return precipitacion>100;
    }); //true

//¿Cuantos litros totales han caido en los meses enero -abril?

const totalLitros=Object.values(precipitaciones)
    .reduce((acc,litros)=>{
        return acc+litros;
    },0);

//Calcular la precipitacion maxima
const precipitacionMaxima=Math.max(...Object.values(precipitaciones));

//obtener pares [clave,valor] <==== entries()

const configuracion={
    tema:"oscuro",
    idioma:"es",
    notificaciones:true,
    volumen:75
};

const entradas=Object.entries(configuracion);

/*
    [
        ["tema","oscuro"],
        ["idioma","es"],
        ["volumen",75]
    ]
*/

const usuarioBD={
    name: "Abdul",
    password:"dasdadzxxcxzc1212",
    email: "abdul@example.com",
    active:true
}

//filtrar. Eliminar los campos sensibles de este object usuario usuarioBD ("password")

Object.entries(usuarioBD).filter()

// destructuring

const {nombre,email}=usuarioBD; // --> const nombre=usuarioBD.nombre
                                // --> const email=usuarioBD.email

const data= [1,2,3,4,5];

const [a,b,c]=data;

function vData([array]){
    const [v1,v2]=array;
    console.log("v1:",v1);
    console.log("v2:",v2);
}

vData(data); //v1:1 v2:2,3,4,5


// Crear funcion llamada mostrarPersona.Obtener el username y las 2 primeras redes sociales que el usuario tenga

const usaurio3={
    id:1,
    info:{
        username:"abdul",
        redes:["twitter","github","linkedin", "facebook"]
    }
}
const {info:{username,redes:[red1,...red2]}}=usuario3;

/*
username --> "abdul"
red1 --> "twitter"
red2 --> ["github","linkedin","facebook"]
*/


//Obtener el nombre y la edad del siguiente objeto.Si no existe edad que guarde el valor 0

const data2={
    id:101,
    usuario:{
        perfil:{
        nombre:"Abdul",
        edad:25,
        direccion:{
            ciudad:"Madrid",
            pais:"España"
        }
    },
    activo:true
},
}

const {usuario:{perfil:{nombre2,edad=0}}}=data2;
/*
nombre2 --> "Abdul",
edad --> 25
*/

const productos1=[
    {
        id:1,
        nombre:"laptop",
        precio:1000,
        fabricante:{
            nombre:"HP",
            pais:"USA",
            contacto:{
                email:"hp@example.com",
                telefono:"+1 234 567 890"
            },
        },
        especificaciones:{
            ram:"16GB",
            cpu:"Intel i7",
        },
    },
    {
        id:2,
        nombre:"smartphone",
        precio:800,
        fabricante:{
            nombre:"Samsung",
            pais:"Corea del Sur",
            contacto:{
                email:"samsung@example.com",
                telefono:"+82 2 2255 0114"
            },
        },
        especificaciones:{
            ram:"8GB",
            cpu:"Snapdragon 888",
        },
    },
    {
        id:3,
        nombre:"tablet",
        precio:600,
        fabricante:{
            nombre:"Apple",
            pais:"USA",
            contacto:{
                email:"apple@example.com",
                telefono:"+1 408 996 1010"
            },
        },
        especificaciones:{
            ram:"4GB",
            cpu:"A15 Bionic",
        },
    },
    {
        id:4,
        nombre:"monitor",
        precio:350,
        fabricante:{
            nombre:"Dell",
            pais:"USA",
            contacto:{
                email:"dell@example.com",
                telefono:"+1 800 289 3355"
            },
        },
        especificaciones:{
            ram:"N/A",
            cpu:"N/A",
        },
    },
    {
        id:5,
        nombre:"teclado",
        precio:120,
        fabricante:{
            nombre:"Logitech",
            pais:"Suiza",
            contacto:{
                email:"logitech@example.com",
                telefono:"+41 21 863 5111"
            },
        },
        especificaciones:{
            ram:"N/A",
            cpu:"N/A",
        },
    }
];


// Crear ua funcion que extraiga los datos del objeto y me devuelva la siguiente estructura:
//nombre,fabricante{nombre,contacto},especificaciones(solo la ram)
//imaginemos un array de productos. Usando la nueva especificacion obtener el nombre del producto con mas ram



const extraerData=(products)=>{
    const {
        nombre,
        fabricante:{
            nombre:nombreFabricante
            ,contacto},
        especificaciones:{ ram }
    }=products;

    return {nombre,fabricante,especificaciones};
}

const newDataArray=(arrayProducts=[])=>{
    return arrayProducts.map(product=>extraerData(product));
}

const obtenerMaxRam=(arrayProducts=[])=>{

}