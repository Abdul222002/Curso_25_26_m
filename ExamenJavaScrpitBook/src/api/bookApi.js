let books= []
function createBookApi() {
    
    const fetchAllBooks =async()=>{
        try {
            const response=await fetch("http://localhost:3000/books")
            if(!response.ok){
                console.log("No se pudo realizar el fetch")
            }
            const data= await response.json()
            books = data
            return books
        } catch (error) {
            throw new Error("Error:"+ error.messsage)
        }
    }
    

    const getBookById =async(id)=>{
        return books.find(book=>Number(book.id)===id)
    }      

    return {
        getBookById,
        fetchAllBooks
    }
   
}

export default createBookApi
