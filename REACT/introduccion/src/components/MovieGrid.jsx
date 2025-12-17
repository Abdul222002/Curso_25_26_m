import React from 'react'
import UseCard from './UseCard'
import { useState } from 'react'

/**
 * Ejercicio:
 * - Renderizar todos los elemtos de db.js usando UseCard con props
 * @returns 
 */
const MovieGrid = async () => {
    const [data, setData] = useState(null)
    return (
    <div>
      <h1>Cartelara de peliculas</h1>
      <div>
        {
             data?? data.results.map(movie=>{
                return <UseCard key= {movie.id} movie={movie} />
            })
        }
      </div>
    </div>
  )
}

export default MovieGrid
