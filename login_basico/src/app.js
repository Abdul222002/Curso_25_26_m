import { DB } from "./bd/db";
import { initialStorage } from "./helpers/storage";
import { renderLoginView } from "./views/loginView";
import { validarCredenciales } from "./services/authServices";

export const initialApp=()=>{
    console.log("App inicializada");
    //iniciamos guardando los usuarios en localStorage
    initialStorage(DB);
    //Pintamos/renderizamos mi formulario en app
    const app=document.getElementById("app");
    app.innerHTML=renderLoginView();
    const form=document.querySelector("#loginForm");
    const message=document.querySelector("#message");

    //pongo un listener al formulario
    form.addEventListener("submit",(e)=>{
        //parar el comportamiento por defecto del formulario, que es recargar la pagina
        e.preventDefault();
        //comprobar si username y password son correctos.
        const { username, password } = Object.fromEntries(new FormData(form));
        //Crear funcion que valide username y password
        // son correctos usando las siguientes restricciones:
        // - no vacias
        // - password > 8 caracteres
        // -username y password existen en el localStorage
        const ok=validarCredenciales(username,password);
        console.log(Object.fromEntries(new FormData(form)));
        message.innerHTML=ok? `<span style="green">Bienvenido ${username}</span>` 
                            : `<span style="red">Credenciales incorrectas</span>`;
        form.reset();
    });
}