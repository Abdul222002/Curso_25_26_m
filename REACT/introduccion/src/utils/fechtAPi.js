export const fetchApi = async () => {
  try {
    const response = await fetch("http://192.168.50.120:1492/api/movies")

    if (!response.ok) {
      throw new Error("Error en la solicitud")
    }

    const data = await response.json()
    return data

    } catch (error) {
        console.error("Error al obtener los datos:", error)
        return {results:[]} // 👈 MUY IMPORTANTE
  }
}