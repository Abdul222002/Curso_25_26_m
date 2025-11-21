import { createEjercicio1 } from "./helpers/ejercicio1";
import { createEjercicio2 } from "./helpers/ejercicio2";
import "./style.css";

export default function createApp() {
  const appDiv=document.getElementById("app");
  //appDiv.appendChild(createEjercicio1());
  appDiv.appendChild(createEjercicio2());

}

