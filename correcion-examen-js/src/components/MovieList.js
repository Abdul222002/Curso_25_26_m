import { createMovieCard } from "./MovieCard"

export const MovieList = () => {
    const container = document.getElementById('movieContainer')

    const render = (movies) => {
        clear()

        if(movies.length===0){
            const noResults = document.createElement('div')
            noResults.textContent = 'No se encontraron resultados'
            noResults.className = 'no-results'
            container.appendChild(noResults)
            return
        }

        movies.forEach(movie => {
            const movieCard = createMovieCard(movie)
            container.appendChild(movieCard)
        })
    }
    
    const clear = () => {
        if(container){
            container.innerHTML = ''
        }
    }

    return {
        clear,
        render
    }
    
}
