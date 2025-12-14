const CLAVECARRITO="gamestore-cart"
const CLAVEFAVORITOS="gamestore-favorites"

function storage() {
    const getCart=()=>{
        const data=localStorage.getItem(CLAVECARRITO)
        return data? JSON.parse(data) : []
    }

    const addToCart=(gameId)=>{
        const data=getCart()
        const dataSet=new Set(data)
        dataSet.add(gameId)
        localStorage.setItem(CLAVECARRITO,JSON.stringify([...dataSet]))
    }

    const removeFromCart=(gameId)=>{
        const data=getCart()
        const index=data.indexOf(gameId)
        if(index!==-1){
            data.splice(index,1)
            localStorage.setItem(CLAVECARRITO,JSON.stringify(data))
        }
    }

    const isInCart=(gameId)=>{
        const data=getCart()
        return data.includes(gameId)
    }

    const getFavourites=()=>{
        const data=localStorage.getItem(CLAVEFAVORITOS)
        return data? JSON.parse(data) : []
    }

    const toggleFavourite=(gameId)=>{
        const data=getFavourites()
        if(data.includes(gameId)){
            const newData=data.filter(id=>id!=gameId)
            localStorage.setItem(CLAVEFAVORITOS,JSON.stringify(newData))
            return false
        }else{  
            const newData=[...data,gameId]
            localStorage.setItem(CLAVEFAVORITOS,JSON.stringify(newData))
            return true
        } 
    }
  
    return{
        getCart,
        addToCart,
        removeFromCart,
        isInCart,
        getFavourites,
        toggleFavourite
    }
}

export default storage
