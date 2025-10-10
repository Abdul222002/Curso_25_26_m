import { ENV } from "../config/env.js";
const VITE_STORAGE_KEY=ENV.VITE_STORAGE_KEY;

//Crear una funcion que carge initialStorage que reciba un array de usuarios y los guarde en el localStorage

/**
 * 
 * @param {*} arrayUsers 
 */
export function initialStorage(arrayUsers=[]){
    if(!Array.isArray(arrayUsers)){
        throw new Error("Error, la data no es un array");
    }
    localStorage.setItem(VITE_STORAGE_KEY,JSON.stringify(arrayUsers));
    console.info(`${ENV.VITE_APP_TITLE}Usuarios guardados correctamente en el localStorage`);
}

/*
export const initialStorage=(arrayUsuarios=[])=>{
    if(!Array.isArray(arrayUsuarios)){
        throw new Error("Error, la data no es un array");
        }
        localStorage.setItem(ENV.VITE_STORAGE_KEY,JSON.stringify(arrayUsuarios));
        }
        */

// Crear una funcion llamada getUsers que se traiga todos los usuarios que hay almacenados en la clave key
/**
 * 
 * @returns - array de usuarios
 */
export const getUsers=()=>{
    return JSON.parse(localStorage.getItem(VITE_STORAGE_KEY)) || [];
}
// Crear una fucion llamada setUsers(usuario) y lo guarde en el localStorage en la key del punto .env

/**
 * 
 * @param {*} user - objeto usuario
 */
export const setUsers=(user)=>{
    /*
    const users=getUsers();
    users.push(user);
    initialStorage(users);
    */
    initialStorage([...getUsers(),user]);

}