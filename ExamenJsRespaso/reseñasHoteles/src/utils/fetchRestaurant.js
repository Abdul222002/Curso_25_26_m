

async function fetchRestaurant (enpoint="restaurant") {
    const VITE_URL=import.meta.env.VITE_URL || "http://localhost"
    const VITE_PORT=import.meta.env.VITE_PORT || 1992
    const VITE_PORT_URL=`${VITE_URL}:${VITE_PORT}`

    try{
        const res= await fetch(`${VITE_PORT_URL}/${enpoint}`)
        if(!res.ok){
            throw new Error("Fallo al hacer la peticion")
        }
        return await res.json()
    }catch(e){
        throw new Error("Error :"+e.message)
    }
    
}

export default fetchRestaurant
