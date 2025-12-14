import { addFavorite, removeFavorite, isFavorite } from "../utils/storage"

export const createBookCard = (book) => {
    const card = document.createElement("div")
    card.dataset.id = book.id
    card.className = "book-card"

    if (isFavorite(book.id)) {
        card.classList.add("book-favorite")
    }

    const img = document.createElement("img")
    img.src = book.cover
    img.alt = book.title
    img.className = "book-cover"
    card.appendChild(img)

    const info = document.createElement("div")
    info.className = "book-info"

    const title = document.createElement("h3")
    title.textContent = book.title
    title.className = "book-title"
    info.appendChild(title)

    const author = document.createElement("p")
    author.textContent = book.author
    author.className = "book-author"
    info.appendChild(author)

    const year = document.createElement("p")
    year.textContent = "Year: " + book.year
    year.className = "book-year"
    info.appendChild(year)

    const category = document.createElement("p")
    category.textContent = book.category
    category.className = "book-category"
    info.appendChild(category)

    card.appendChild(info)

    card.addEventListener("click", () => {
        card.classList.toggle("book-favorite")

        if (card.classList.contains("book-favorite")) {
            addFavorite(book.id)
        } else {
            removeFavorite(book.id)
        }
    })

    card.addEventListener("dblclick", (e) => {
        e.stopPropagation()
        card.remove()
    })

    return {
        element: card
    }
}
