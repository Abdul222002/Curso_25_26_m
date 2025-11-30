import { createEjercicio1 } from "./helpers/ejercicio1";
import createEjercicio11 from "./helpers/ejercicio11";
import { createEjercicio2 } from "./helpers/ejercicio2";
import createEjercicio3 from "./helpers/ejercicio3";
import createEjercicio4 from "./helpers/ejercicio4";
import createEjercicio6 from "./helpers/ejercicio6";
import createEjercicio7 from "./helpers/ejercicio7";
import createEjercicio8 from "./helpers/ejercicio8";
import "./style.css";

export default function createApp() {
  const appDiv=document.getElementById("app");
  //appDiv.appendChild(createEjercicio1());
  //appDiv.appendChild(createEjercicio2());
  //Ejercicio 3
  //appDiv.appendChild(createEjercicio3().render());
  //Ejercicio 4
  //appDiv.appendChild(createEjercicio4().render());
  //Ejercicio 6
  //appDiv.appendChild(createEjercicio6().render());
  //Ejercicio 7
  //appDiv.appendChild(createEjercicio7().render());
  //Ejercicio 8
  appDiv.appendChild(createEjercicio8().render());
  //Ejercicio 11
  //appDiv.appendChild(createEjercicio11().render());
}

