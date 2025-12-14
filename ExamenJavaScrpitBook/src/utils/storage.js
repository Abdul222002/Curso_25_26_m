const BOOKSFAVORITES="amazonbooks-favorites"

export const getFavorites=()=>{
    const data=localStorage.getItem(BOOKSFAVORITES)
    return data? JSON.parse(data) : []
}

export const addFavorite=(bookId)=>{
    const id=String(bookId)
    const data =getFavorites()
    if(!data.includes(id)){
        data.push(id)
        const dataParsed=JSON.stringify(data)
        localStorage.setItem(BOOKSFAVORITES,dataParsed)
        return true
    }   

    return false
}

export const removeFavorite=(bookId)=>{
    const id=String(bookId)
    const data =getFavorites()
    const index=data.indexOf(id)
    if(index!==-1){
        data.splice(index,1)
        const dataParsed=JSON.stringify(data)
        localStorage.setItem(BOOKSFAVORITES,dataParsed)
        return true
    }
    return false
}

export const isFavorite=(bookId)=>{
    const id=String(bookId)
    const data =getFavorites()
    return data.includes(id)
}