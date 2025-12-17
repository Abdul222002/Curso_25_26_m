function createGameAPI() {
    
    let games
    
    const fetchAllGames=async ()=>{
        try {
            const res=await fetch("http://localhost:3000/games")
            if(!res.ok){
                console.log("No se ha podido realizar la peticion a al api")
                return
            }

            const data=await res.json() 
            games=data
            return data
        } catch (error) {
            throw new Error("Error"+error.message)
        }
    }   

    const getAllGames=()=>{
        return [...games]
    }

    const getGameById=(id)=>{
        return games.find(game=>Number(game.id)===id)
    }
    
    const getGamesByPlatform=(platform)=>{
        return games.filter(game=>game.platform===platform)
    }

    return{
        fetchAllGames,
        getAllGames,
        getGameById,
        getGamesByPlatform
    }
}

export default createGameAPI
