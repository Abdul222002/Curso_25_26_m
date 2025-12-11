export const createMovieCard = (movie) => {
    const card = document.createElement('div')
    card.classList.add('movie-card')

    //Identificar cada card con un nombre unico
    card.dataset.id = movie.id
    //¿Esta la card en localStorage?
    if(Storage.isWatched(movie.id)){
        card.classList.add('movie-watched')
    }

    //Poster
    const poster = document.createElement('img')
    poster.src = `https://192.168.50.120:${movie.poster_path}`
    poster.alt = movie.title
    card.appendChild(poster)
    
    //info de la película
    const info = document.createElement('div')
    info.className = 'movie-info'

    //titulo de la película
    const title = document.createElement('h3')
    title.className = 'movie-title'
    title.textContent = movie.title
    info.appendChild(title)

    //rating de la película
    const rating = document.createElement('p')
    rating.className = 'movie-rating'
    rating.textContent = `⭐ ${movie.vote_average}`
    info.appendChild(rating)
    
    card.appendChild(info)

    // eventos
    card.addEventListener('click', () => {
        if(card.classList.contains("movie-watched")){
            card.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }else{
            card.classList.add("movie-watched")
            Storage.addWatchedMovie(movie.id)
        }
    })

    card.addEventListener('dblclick', () => {
        card.remove()
        Storage.removeWatchedMovie(movie.id)
    })

    card.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        if(card.classList.contains("movie-watched")){
            card.classList.remove("movie-watched")
            Storage.removeWatchedMovie(movie.id)
        }

    })

    return card
}