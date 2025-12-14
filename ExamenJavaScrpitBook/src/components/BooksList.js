import { createBookCard } from "./BookCard"


export const createBookList=()=>{
    const container=document.createElement("div")
    container.className="books-container"

    const bookList=(bookArray=[])=>{
        clear()
        bookArray.forEach(book=>{
            container.appendChild(createBookCard(book).element)
        })
        return container
    }

    const clear =()=>{
        container.innerHTML=``
    }


    return {
        bookList,
    }

}