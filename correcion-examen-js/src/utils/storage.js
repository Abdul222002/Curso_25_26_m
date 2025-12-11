
const KEY ="watched_movies"

const save = (KEY, data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
};



const getWatchedMovies = () => {
    const moviesString = localStorage.getItem(KEY)
    return moviesString ? JSON.parse(moviesString) : []
}


const addWatchedMovie = (movieId) => {
    const movies = getWatchedMovies()
    if(!movies.includes(movieId)){
        movies.push(movieId)
        save(KEY, movies)
    } 
}


const removeWatchedMovie = (movieId) => {
    const movies = getWatchedMovies()
    const index = movies.indexOf(movieId)
    if(index !== -1){
        movies.splice(index, 1)
        save(KEY, movies)
    }
}


const isWatched=(movieId)=>{
    const movies = getWatchedMovies()
    return movies.includes(movieId)
}

export const Storage = {
    getWatchedMovies,
    addWatchedMovie,
    removeWatchedMovie,
    isWatched
}
