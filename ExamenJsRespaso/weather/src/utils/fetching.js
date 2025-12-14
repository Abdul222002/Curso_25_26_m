

export const fetching=(endpoint="London")=>{
    const API_URL=import.meta.env.VITE_API_URL || "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_API_KEY  || "69cb897eb1271163318d5451e8c20f65"

    return fetch(`${API_URL}?q=${endpoint}&APPID=${API_KEY}&units=metric&lang=es`)
    .then(res=>{
        if(!res.ok){
            throw new Error("No se ha podido encontrar la direccion proporcionada")
        }
        return res
    })
    .then(data=>{
        return data.json()
    })
    .catch(e=>{
        console.log("Error al obtener los datos: " ,e)
        throw e;
    })
}