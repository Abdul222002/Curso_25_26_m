import weatherStates from "../public/db";
import { fetching } from "../utils/fetching";


const WEATHERDATA = "weatherData";

export const weather = () => {

    // Guarda un Map en localStorage
    function subirMapLocalStorage(data) {
        const dataArray = Array.from(data);
        localStorage.setItem(WEATHERDATA, JSON.stringify(dataArray));
    }

    // Recupera un Map desde localStorage
    function bajarMapLocalStorage() {
        const data = localStorage.getItem(WEATHERDATA);
        return data ? new Map(JSON.parse(data)) : new Map();
    }

    

    const dataDb = () => weatherStates;

    const renderWeather = (data) => {

        const state = {
            cache: new Map(),
            isLoading: false,
        };  

        const container = document.createElement("div");
        const header = document.createElement("header");
        const footer = document.createElement("footer");
        const main = document.createElement("main");

        // Buscador
        const SearchWeather = document.createElement("form");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const button = document.createElement("button");

        button.textContent = "Buscar";
        button.type = "submit";
        label.textContent = "Buscar Ciudad";
        input.type = "text";
        input.placeholder = "Escribe una ciudad...";

            
        //Conseguir la ciudad
        const getCiudad=(ciudad)=>{
            const data =fetching(ciudad).then((data=>data))
            return data
        }

        button.addEventListener("click",async (e)=>{
            e.preventDefault()
            const ciudad=input.target;
            const datos=await getCiudad(ciudad);
            console.log(datos)
        })

        SearchWeather.appendChild(button);
        SearchWeather.appendChild(label);
        SearchWeather.appendChild(input);

        main.appendChild(SearchWeather);
        container.appendChild(header);
        container.appendChild(main);
        container.appendChild(footer);

        return container;
    };

    const render = () => {
        const mainContainer = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = "Pruebas";

        mainContainer.appendChild(title);
        mainContainer.appendChild(renderWeather());

        return mainContainer;
    };

    return { render };
};
