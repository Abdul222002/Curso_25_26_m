
//*
//  1)Crear una funcion getWeatherByCity que reciba una ciudad y me devuelva el clima 
//  2) Crear una funcion llamada parseWeatherData(data){} que devuelva:
//    city,pais,temperatura,humedad,viento,descripcion
// */


export const getWeatherByCity = async (city) => {
    const VITE_API_URL=import.meta.env.VITE_API_URL || "https://api.openweathermap.org/data/2.5/weather";
    const VITE_API_KEY =import.meta.env.VITE_API_KEY || "69cb897eb1271163318d5451e8c20f65";
    const VITE_API_METRIC=import.meta.env.VITE_API_METRIC || "&units=metric&lang=es&appid="

    try{
        const res= await fetch(`${VITE_API_URL}?q=${city}${VITE_API_METRIC}${VITE_API_KEY}`)
        if(!res.ok){
            throw new Error("Error al hacer el fetch")
        }
        const data= await res.json()
        return data
    }catch(e){
        throw new Error("Error al hacer la peticion",e)
    }
};

export function parseWeatherData(data) {
    if (!data || !data.main || !data.weather || !data.wind) {
        return null; // Manejo de error si la data no tiene lo esperado
    }

    return {
        city: data.name,
        pais: data.sys.country || "",
        temperatura: data.main.temp,
        humedad: data.main.humidity,
        viento: data.wind.speed,
        descripcion: data.weather[0].description || ""
    };
}
 