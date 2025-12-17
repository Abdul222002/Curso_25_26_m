import React from 'react'

const Card = ({src,texto}) => {
  return (
    <div>
        <img src ={src} alt='imagen'></img>
        <p>{texto}</p>
    </div>
  )
}

export default Card
