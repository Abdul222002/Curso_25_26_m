
export const bookingFetch=async(endpoint)=>{
    const VITE_PORT=import.meta.env.VITE_PORT || 1997
    const VITE_URL=import.meta.env.VITE_URL || "http://localhost"
    const VITE_URL_PORT=`${VITE_URL}:${VITE_PORT}`
    try{
        const res= await fetch(`${VITE_URL_PORT}/${endpoint}`)
        if(!res.ok){
            throw new Error("No se a podido realizar la peticion")
        }
        return await res.json()
    }catch(e){
        throw new Error(`Error: ${e?.message || e}`)
    }
}