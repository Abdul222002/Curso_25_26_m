// aqui van las funciones helper para las dbTareas
import { uid } from 'uid';
const TEXT_KEY=import.meta.env.VITE_TEXT_KEY;

export const rellenarLocalStorage = (arrayTareas,tareas="Tareas") => {
    //Guardar en localStorage em la clave "Tareas"
    localStorage.setItem(tareas, JSON.stringify(arrayTareas));
}


// Crear una funcion llamada crear tareas que le pase como parametrouna clave y me muestre a traves de la consola.table la clave 
export const mostrarTareas=(claveBuscarLocalStorage="Tareas")=>{
    console.table(JSON.parse(localStorage.getItem(claveBuscarLocalStorage)))
}

export function saveTareas(arrayTareas=[]){
    try {
        if(!Array.isArray(arrayTareas)){
            throw new Error(`Error, la data ${arrayTareas} no es un array`);
        }
        // Serializar--> Lo convierto a string stringify
        const json=JSON.stringify(arrayTareas);
        // Guardar en localStorage
        localStorage.setItem(TEXT_KEY,json);
        console.info("Tareas guardadas correctamente 💾");
    } catch (error) {
        throw new Error("Error al guardar las tareas en el localStorage:" + error.message);
    }
}


export const getTareas= ()=>{
    const datSinParsear=localStorage.getItem(TEXT_KEY);
    const dataParseada=safeJSONParse(datSinParsear);
    
    if(!Array.isArray(dataParseada)){
        console.Error("Error, la data no es un array");
        return [];
    }

    return dataParseada;

}


export const addTarea=(nombreTarea)=>{

    const nombre=String(nombreTarea ?? "").trim();

    try {
        const nuevaTarea={
            id:uid(5),
            nombre,
            fechaCreacion:new Date().toISOString(),
            completada:false
        }
        dbTareas.push(nuevaTarea);
    } catch (error) {        
        console.error("Error al agregar tarea:", error);
    }
}


export const deleteTarea=(id,arrayTareas=[])=>{
    const index=arrayTareas.findIndex(tarea=>tarea.id===id);
    if (index!==-1){
        arrayTareas.splice(index,1);
        rellenarLocalStorage(arrayTareas,"tareas");
    }
    return arrayTareas;
}

function safeJSONParse(text) {
    try {
        if(typeof text!=="string"){
            throw new Error(`Error, la data ${text} no es un string`);
        }
        return JSON.parse(text);
    } catch (error) { 
        throw new Error("Error al parsear JSON");   
    }
}