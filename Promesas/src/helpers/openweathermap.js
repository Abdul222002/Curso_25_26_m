//--------------------------------
//OpenWeatherMap Helper Functions
//--------------------------------

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_OPENWEATHER = import.meta.env.VITE_API_OPENWEATHER; 

//-------------VERSION 1 USANDO PROMISE-----------

export function getWeatherByCityPromise(city="Madrid") {
    const URL=`${VITE_API_OPENWEATHER}?q=${city}&units=metric&appid=${VITE_API_KEY}`;
    //peticion a una api open weather
    return fetch(URL).then(response=>{
        if(!response.ok){
            throw new Error("Error al obtener los datos de la api");
        }
        return response.json();
    })
    .then(data=>{
        console.log(`--------------Clima de la ciudad ${city}`)
        console.log(`🌡️Temperatura: ${data.main.temp} °C`);
        const arrayClima=['☁️','⛈️','🌤️','☀️']
        const weather=data.weather[0].main;
        switch (weather) {
            case `Clouds`:
                console.log(`El clima es nublado ${arrayClima[0]}`);
                break;
            case `Rain`:
                console.log(`El clima es lluvioso ${arrayClima[1]}`);
                break;
            case `Clear`:
                console.log(`El clima es despejado ${arrayClima[2]}`);
                break;
            case `Sunny`:
                console.log(`El clima es soleado ${arrayClima[3]}`);
                break;
            default:
                break;
        }
        return data;
    })
    .catch(error=>{
        console.error("Error:",error.message);
    })
    .finally(()=>{
        console.log("Peticion finalizada (Promise)");
    })
};