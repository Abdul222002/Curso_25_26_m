import { getUsers } from "../helpers/storage";
import bcrypt from "bcryptjs";

export const validarCredenciales=(username="",password="")=>{
    username=username.trim();
    password=password.trim();
    //validar que no vengan vacios
    if(!username.trim() || !password.trim() || password.length<6){
        return false;
    }
    //validar que username y password existan en el localStorage
    //traer los usuarios del localStorage
    const users=getUsers();
    //buscar si existe un usuario que coincida con username y password
    const userFound=users.find((user)=>user.username===username );
    const salt=bcrypt.genSaltSync(10);
    const passwordHash=bcrypt.hashSync(password,salt);
    const ok = bcrypt.compareSync(userFound.passwordHash,passwordHash);
    return ok;
}
