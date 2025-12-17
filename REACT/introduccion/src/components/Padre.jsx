

import React from 'react'

const Padre = ({saludo,edad,nombre,datos}) => {
    
    return (
    <>
    <div>
      Padre {JSON.stringify(datos)}
    </div>
    <p>Padre tiene el nombre :{nombre}</p>
    <p>Padre tiene la edad :{edad}</p>
    <p>Padre dice :{saludo}</p>
    </>
  )
}

export default Padre
Padre