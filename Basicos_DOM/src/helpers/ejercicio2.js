import { tareas } from "../db/data";


export function createEjercicio2() {
 
    
    function fetching() {
        const PORT=import.meta.env.VITE_PORT;
        const URL=import.meta.env.VITE_URL;
        const URL_PORT=`${URL}:${PORT}`;
    
        return fetch(`${URL_PORT}/tareas`)
        .then((res=>{
            if(!res.ok){
                throw new Error("Error en la petición");
            }return res.json();
        }))
        .then(data=>{
            return data;
        })
        .catch(error=>{
            console.error(error);
        })
    }

    function noFetching() {
        return {
            texto: tareas.texto,
            completada: tareas.completada
        };
    }

    const container = document.createElement("div");
    const lista = document.createElement("ul");
    lista.classList.add("task-list");
    fetching().then((tareas)=>{
        tareas.forEach(tarea=>{
            const item = document.createElement("li");
            const check=tarea.completada? "🟢":"❌";
            item.classList.add("task-item");
            if(tarea.completada){
                item.classList.add("completed");
            }
            item.textContent = `${check} ${tarea.texto}`;
            lista.appendChild(item);
        })
        container.appendChild(lista);
    })
   
    /*noFetching().forEach(tarea => {
        const item = document.createElement("li");
        item.classList.add("task-item");
        if (tarea.completada) {
            item.classList.add("completed");
        }
        item.textContent = tarea.texto;
        lista.appendChild(item);
    });
    */
    container.appendChild(lista);
    return container;   
}