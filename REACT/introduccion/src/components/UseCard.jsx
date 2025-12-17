import React , { useState } from 'react'

const UseCard = ({movie}) => {
    const IMAGE_BASE_URL="http://192.168.50.120:1492"
    const {title, poster_path, release_date, vote_average, overview} = movie
    
    //Hooks
    const [overviewData, setOverviewData] = useState("")

    function handelClick() {
        setOverviewData(overview)
    }

    function handelDblClick() {
        setOverviewData("")
    }

    return (
    <div className='card' 
        onClick={handelClick}
        onDoubleClick={handelDblClick}>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} width="200"/>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{Math.round(vote_average)}</p>
      <p className='overview'> {overviewData}</p>
    </div>
  )
}

//CREAR UNA FUNCIO UTILS PARA TRAER LA DATA

export default UseCard
