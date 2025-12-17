import React, { useState } from 'react'
import ButtonAccion from './ButtonAccion'
import UseCard from './UseCard'

const Mensaje = () => {
    const [mensaje, setMensaje] = useState("")
    
    return (
    <div>
      <p>
        {mensaje}
      </p>
      <ButtonAccion setMensaje={setMensaje}/>
      <UseCard/>
    </div>
  )
}

export default Mensaje
