//------------IMPORTACIONES-----------------------
import { dbTareas } from "./db/db";
import { addTarea, mostrarTareas, rellenarLocalStorage } from "./helpers/tareas";
const TEXT_KEY=import.meta.env.VITE_TEXT_KEY;


//-------------INICIO DE LA APLICACION----------------

rellenarLocalStorage(dbTareas,TEXT_KEY);
mostrarTareas(TEXT_KEY);
addTarea("Aprender JavaScript",dbTareas);
mostrarTareas(TEXT_KEY);