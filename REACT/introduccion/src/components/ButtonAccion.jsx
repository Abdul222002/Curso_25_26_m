import React from 'react'

const ButtonAccion = ({setMensaje}) => {
    
    //variables 
    //const mensaje = "Mensaje para el padre"

    // Hooks de Estado

    //useEffect

    //funciones
    function handleClick(e) {
        //funcion que setee el mensaje "Hola Mundo" en el componente padre
        setMensaje(e.target.textContent)
    }

    function handleContextMenu(e) {
        e.preventDefault()
        setMensaje("Mensaje desde el click derecho")
    }

    return (
    <button 
        onClick={handleClick} 
        onContextMenu={handleContextMenu}
        >Pulse Aqui</button>
    )
}

export default ButtonAccion
