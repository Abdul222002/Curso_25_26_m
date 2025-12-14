import createBookApi from "./api/bookApi"
import { createBookList } from "./components/BooksList"

async function createApp() {
    const app = document.getElementById("app")

    // HEADER
    const header = document.createElement("header")
    header.className = "header"
    const title = document.createElement("h1")
    title.textContent = "📚 AmazonBooks Lite - Abdul Hakim Byaz Iglesias"
    header.appendChild(title)
    app.appendChild(header)

    // CONTENEDOR PRINCIPAL
    const main = document.createElement("main")
    const mainContainer = document.createElement("div")
    mainContainer.className = "main-container"

    // INPUT
    const divSearch = document.createElement("div")
    divSearch.className = "search-container"
    const input = document.createElement("input")
    input.id = "search-input"
    input.className = "search-input"
    input.type = "text"
    input.placeholder = "Buscar por título o autor..."
    divSearch.appendChild(input)

    // BOTONES
    const categories = ["Todos", "Fantasía", "Ciencia Ficción", "Romance", "Thriller", "Terror", "Historia"]
    const categoriesContainer = document.createElement("div")
    categoriesContainer.className = "categories-container"

    categories.forEach(cat => {
        const button = document.createElement("button")
        button.className = "category-btn"
        button.textContent = cat
        categoriesContainer.appendChild(button)
    })

    // AÑADIR INPUT Y BOTONES AL CONTENEDOR
    mainContainer.appendChild(divSearch)
    mainContainer.appendChild(categoriesContainer)
    main.appendChild(mainContainer)
    app.appendChild(main)

    // Cargar todos los libros al inicio
const books = await createBookApi().fetchAllBooks()

// Mostrar todos los libros al cargar la página
const initialList = createBookList().bookList(books)
mainContainer.appendChild(initialList)

// BUSCADOR EN TIEMPO REAL
input.addEventListener("keyup", (e) => {
    const text = e.currentTarget.value.toLowerCase()

    const filtered = text.length === 0
        ? books
        : books.filter(book =>
            book.title.toLowerCase().includes(text) ||
            book.author.toLowerCase().includes(text)
        )

    const div = createBookList().bookList(filtered)

    // Limpiar lista anterior
    const oldList = mainContainer.querySelector(".books-container")
    if (oldList) oldList.remove()
    
    mainContainer.appendChild(div)
    })

    // FILTRO POR CATEGORÍAS
    categoriesContainer.addEventListener("click",(e)=>{
        const button=e.target.textContent
        let div
        if(button.trim().toLowerCase()!=="todos".trim().toLowerCase()){
            const filter=books.filter(book=>book.category.trim().toLowerCase()===button.trim().toLowerCase())
            console.log(filter)
            div = createBookList().bookList(filter)
        }else{
            div=createBookList().bookList(books)
        }
        // Limpiar lista anterior
        const oldList = mainContainer.querySelector(".books-container")
        if (oldList) oldList.remove()
        mainContainer.appendChild(div)
    })
        
}

export default createApp
