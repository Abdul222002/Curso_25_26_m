//IMPORTAMOS VARIABLES DE ENTORNO
import dotenv from 'dotenv';
dotenv.config();
const API_URL = import.meta.env.VITE_API_URL;
//Crear una funcion una utilizando promise y otro async await que se traiga de jsonplaceholder.typicode.com/photos 
// el title y la imagen (thumbnailUrl) de la foto con id 1.
// Usando Promesas y async/await


//Funcion asincrona usando PROMISE
export function dataJSONPromise (){
    console.log("--------dataJSONPromise--------");
    fetch(`${API_URL}/1`);

};

//Funcion asincrona usando ASYNC AWAIT
export async function dataJSONAsyncAwait(){
    console.log("--------dataJSONAsyncAwait--------");
}