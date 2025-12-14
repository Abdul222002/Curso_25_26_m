import storage from "../utils/storage"

function createGameCard(game) {

    //CARD
    const card=document.createElement("div")

    if(!storage().getFavourites().includes(game.id)){
        card.classList.add("game-favorite")
    }

    if(!storage().isInCart(game.id)){
        card.classList.add("game-in-cart")
    }


    card.className="game-card"
    card.dataset.id=game.id

    //IMAGEN 
    const img=document.createElement("img")
    img.src=game.cover
    img.alt=game.title
    card.appendChild(img)

    //GAME-indexOf
    const gameInfo=document.createElement("div")
    gameInfo.className="game-info"

    //title
    const title=document.createElement("h3")
    title.className="game-title"
    title.textContent=game.title
    gameInfo.appendChild(title)

    //developer
    const developer=document.createElement("p")
    developer.className="game-developer"
    developer.textContent=game.developer
    gameInfo.appendChild(developer)


    //platform
    const platform=document.createElement("p")
    platform.className="game-platform"
    platform.textContent=game.platform
    gameInfo.appendChild(platform)


    //DIV_META
    const divMeta=document.createElement("div")
    divMeta.className="game-meta"


    //GAME PRICE
    const price=document.createElement("span")
    price.className="game-price"
    price.textContent="$ "+ game.price
    divMeta.appendChild(price)


    //GAME RATING 
    const rating=document.createElement("span")
    rating.className="game-rating"
    rating.textContent="⭐ " + game.rating
    divMeta.appendChild(rating)


    gameInfo.appendChild(divMeta)

    //GAME GENRE
    const genre=document.createElement("p")
    genre.className="game-genre"
    genre.textContent=game.genre
    gameInfo.appendChild(genre)

    //GAME STOCK
    const stock=document.createElement("p")
    stock.className="game-stock"
    stock.textContent="En stock: "+game.stock
    gameInfo.appendChild(stock)

    card.appendChild(gameInfo)

    //EVENTOS
    card.addEventListener("click", () => {
    const isFav = storage().toggleFavourite(game.id)
    if (isFav) {
        card.classList.add("game-favorite")
    } else {
        card.classList.remove("game-favorite")
    }
})

card.addEventListener("dblclick", () => {
    if (!storage().isInCart(game.id)) {
        storage().addToCart(game.id)
        card.classList.add("game-in-cart")

        // Actualizar contador
        const cartCounter = document.getElementById("cart-count")
        if (cartCounter) {
            cartCounter.textContent = storage().getCart().length
        }
    }
})

card.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    alert(
        `Descripción: ${game.description}\n` +
        `Año: ${game.year}\n` +
        `Stock: ${game.stock}`
    )
})

    return {
        element:card
    }

}

export default createGameCard
