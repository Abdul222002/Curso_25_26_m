//Importar las variables .env

import { bienvenida } from "../db/data";



export function createEjercicio1() {

function fetching() {
    const PORT=import.meta.env.VITE_PORT;
    const URL=import.meta.env.VITE_URL;
    const URL_PORT=`${URL}:${PORT}`;
    
    return fetch(`${URL_PORT}/bienvenida`)
    .then((response =>{
        if(!response.ok){
            throw new Error("Error en la petición");
        }
        return response.json();
    }))
    .then(data=>{
        return data.texto;
    })
    .catch(error=>{
        console.error("Error:",error);
    });
}

const  noFetching = () => {
    return bienvenida.texto;};

// Aqui decido donde pintar el objeto en el DOM

const container=document.createElement("div");
const parrafo=document.createElement("p");

parrafo.classList.add("welcome-message");
fetching().then((texto)=>{parrafo.textContent=texto;});

container.appendChild(parrafo);
return container;
}