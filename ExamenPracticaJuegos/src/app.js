import createGameAPI from "./api/gameAPI"
import createGameCard from "./components/GameCard"

async function createApp() {
    const app = document.getElementById("app")
    const api = createGameAPI()

    /* =========================
       HEADER
    ========================== */
    const header = document.createElement("header")
    header.className = "header"

    const title = document.createElement("h1")
    title.textContent = "🎮 GameStore Pro - Abdul Hakim"

    const divCartIndicator = document.createElement("div")
    divCartIndicator.className = "cart-indicator"
    divCartIndicator.textContent = "🛒"

    const cartCount = document.createElement("span")
    cartCount.textContent = 0
    cartCount.id = "cart-count"

    divCartIndicator.appendChild(cartCount)
    header.appendChild(title)
    header.appendChild(divCartIndicator)

    /* =========================
       MAIN
    ========================== */
    const mainContainer = document.createElement("div")
    mainContainer.className = "main-container"

    /* =========================
       SEARCH
    ========================== */
    const divSearchContainer = document.createElement("div")
    divSearchContainer.className = "search-container"

    const inputSearch = document.createElement("input")
    inputSearch.type = "text"
    inputSearch.placeholder = "Buscar por título o desarrollador..."
    inputSearch.className = "search-input"

    divSearchContainer.appendChild(inputSearch)
    mainContainer.appendChild(divSearchContainer)

    /* =========================
       FILTERS
    ========================== */
    const filterSection = document.createElement("div")
    filterSection.className = "filters-section"

    /* ---- GENRES ---- */
    const genresContainer = document.createElement("div")
    genresContainer.className = "genres-container"

    const genres = ["Todos", "Aventura", "Acción", "RPG", "Deportes", "Estrategia", "Shooter"]

    genres.forEach(genre => {
        const button = document.createElement("button")
        button.textContent = genre
        button.dataset.genre = genre
        button.className = "genre-btn"
        if (genre === "Todos") button.classList.add("active")
        genresContainer.appendChild(button)
    })

    filterSection.appendChild(genresContainer)

    /* ---- PLATFORM ---- */
    const platformSelector = document.createElement("div")
    platformSelector.className = "platform-selector"

    const platformSelect = document.createElement("select")
    platformSelect.className = "platform-select"

    const platforms = ["Todas", "PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch", "PlayStation 4"]
    platforms.forEach(platform => {
        const option = document.createElement("option")
        option.value = platform
        option.textContent = platform
        platformSelect.appendChild(option)
    })

    platformSelector.appendChild(platformSelect)
    filterSection.appendChild(platformSelector)

    /* ---- SORT ---- */
    const sortSelector = document.createElement("div")
    sortSelector.className = "sort-selector"

    const sortSelect = document.createElement("select")
    sortSelect.className = "sort-select"

    const sorts = [
        { value: "default", label: "Por defecto" },
        { value: "price-asc", label: "Precio ↑" },
        { value: "price-desc", label: "Precio ↓" },
        { value: "rating-desc", label: "Rating ↓" },
        { value: "year-desc", label: "Año ↓" }
    ]

    sorts.forEach(sort => {
        const option = document.createElement("option")
        option.value = sort.value
        option.textContent = sort.label
        sortSelect.appendChild(option)
    })

    sortSelector.appendChild(sortSelect)
    filterSection.appendChild(sortSelector)

    mainContainer.appendChild(filterSection)

    /* =========================
       GAMES CONTAINER
    ========================== */
    const gameContainer = document.createElement("div")
    gameContainer.className = "games-container"
    mainContainer.appendChild(gameContainer)

    /* =========================
       DATA
    ========================== */
    await api.fetchAllGames()
    const data = api.getAllGames()

    /* =========================
       FILTER STATE
    ========================== */
    let filters = {
        text: "",
        genre: "Todos",
        platform: "Todas",
        sort: "default"
    }

    /* =========================
       RENDER
    ========================== */
    const renderGames = (games) => {
        gameContainer.innerHTML = ""

        if (games.length === 0) {
            gameContainer.textContent = "No hay resultados"
            return
        }

        games.forEach(game => {
            const card = createGameCard(game).element
            gameContainer.appendChild(card)
        })
    }

    /* =========================
       APPLY FILTERS
    ========================== */
    const applyFilters = () => {
        let filtered = [...data]

        // TEXT
        if (filters.text) {
            const q = filters.text.toLowerCase()
            filtered = filtered.filter(game =>
                game.title.toLowerCase().includes(q) ||
                game.developer.toLowerCase().includes(q)
            )
        }

        // GENRE
        if (filters.genre !== "Todos") {
            filtered = filtered.filter(game => game.genre === filters.genre)
        }

        // PLATFORM
        if (filters.platform !== "Todas") {
            filtered = filtered.filter(game => game.platform === filters.platform)
        }

        // SORT
        switch (filters.sort) {
            case "price-asc":
                filtered.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                filtered.sort((a, b) => b.price - a.price)
                break
            case "rating-desc":
                filtered.sort((a, b) => b.rating - a.rating)
                break
            case "year-desc":
                filtered.sort((a, b) => b.year - a.year)
                break
        }

        renderGames(filtered)
    }

    /* =========================
       EVENTS
    ========================== */
    inputSearch.addEventListener("input", e => {
        filters.text = e.target.value.trim()
        applyFilters()
    })

    genresContainer.addEventListener("click", e => {
        if (!e.target.matches("button")) return

        document.querySelector(".genre-btn.active")?.classList.remove("active")
        e.target.classList.add("active")

        filters.genre = e.target.dataset.genre
        applyFilters()
    })

    platformSelect.addEventListener("change", e => {
        filters.platform = e.target.value
        applyFilters()
    })

    sortSelect.addEventListener("change", e => {
        filters.sort = e.target.value
        applyFilters()
    })

    /* =========================
       INIT
    ========================== */
    renderGames(data)

    app.appendChild(header)
    app.appendChild(mainContainer)
}

export default createApp
