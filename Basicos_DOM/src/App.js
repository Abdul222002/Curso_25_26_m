import { createEjercicio1 } from "./helpers/ejercicio1";
import { createEjercicio2 } from "./helpers/ejercicio2";
import createEjercicio3 from "./helpers/ejercicio3";
import createEjercicio4 from "./helpers/ejercicio4";
import "./style.css";

export default function createApp() {
  const appDiv=document.getElementById("app");
  //appDiv.appendChild(createEjercicio1());
  //appDiv.appendChild(createEjercicio2());
  //Ejercicio 3
  appDiv.appendChild(createEjercicio3().render());
  //Ejercicio 4
  appDiv.appendChild(createEjercicio4().render());
}

