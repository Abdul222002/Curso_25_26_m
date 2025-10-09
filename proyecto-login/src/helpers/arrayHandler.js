import bd from "../bd/bd.js"; // 
const usuariosArray=bd.usuariosArray;
const usuariosObj=bd.usuariosObj;
const usuariosMap=bd.usuariosMap;
import { v4 as uuid } from "uuid";


export const registrarUsuario=(username,password, tipo)=>{
    const tipoLimpio=tipo.trim().toLowerCase();
    const usuarioLimpio=username.trim().toLowerCase()
if(tipoLimpio==="array"){
        ;
        if(usuariosArray.some(usuario=>usuario.username===usuarioLimpio)){
           console.error("El usuario ya existe");
           return;
    }
    usuariosArray.push({
        id: uuid(4),
        username: usuarioLimpio,
        passwordHash: password
    })
    console.table({usuariosArray})
}else if(tipoLimpio==="obj"){
    if(usuariosObj[usuarioLimpio]){
        console.error("El usuario ya existe");
        return;
    }
    usuariosObj[usuarioLimpio]={
        id: uuid(4),
        username: usuarioLimpio,
        passwordHash: password
    }
    console.log({usuariosObj})
}else if(tipoLimpio==="map"){
    if(usuariosMap.has(usuarioLimpio)){
        console.error("El usuario ya existe");
        return;
    }
    usuariosMap.set(usuarioLimpio,{
        id: uuid(4),
        username: usuarioLimpio,
        passwordHash: password
    });
    console.log({usuariosMap})
}else{
    console.error("Tipo de estructura no válida");
}
}

