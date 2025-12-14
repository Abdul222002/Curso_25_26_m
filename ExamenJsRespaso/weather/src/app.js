import { weather } from "./helpers/ejercicioWeather";

export default function createApp(){
    const app=document.getElementById("app");
    app.innerHTML=`
        <h1>Weather App</h1>
    `
    app.appendChild(weather().render())
}