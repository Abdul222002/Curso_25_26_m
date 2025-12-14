import { bookingFetch } from "../helpers/bookingfetch"
import { getMapFromLocalStorage, setMapToLocalStorage } from "../helpers/localStorage"
import bookingSelector from "./bookingSelector"
import dateBooking from "./dateBooking"
import { hotelCard } from "./hotelCard"

function bookingApp() {
    
    const renderBooking =async()=>{

        const container= document.createElement("div")
        const header=document.createElement("header")
        const main=document.createElement("main")
        
        container.appendChild(header)
        //Nombre de la pagina
        const nombrePag=document.createElement("h1")
        nombrePag.textContent="bookingApp"

        //Nombre de la pagina
        const nombreEmpresa=document.createElement("h2")
        nombreEmpresa.textContent="Rastreator"
        header.appendChild(nombreEmpresa)
        header.appendChild(nombrePag)

        //Numero de hoteles
        const inputNumero=document.createElement("input")
        inputNumero.type="number"
        inputNumero.placeholder="Numero de personas"
        inputNumero.name="numeroPersonas"
        main.appendChild(inputNumero)


        // -------------------------------
        // FETCH DE DATOS
        // -------------------------------

        const ciudades=await bookingFetch("ciudades")
        const hoteles=await bookingFetch("hoteles")

        

        //Ahora hacemos el junto de contenedores empezamos con el contenedor del selector
        const containerSelector=bookingSelector(ciudades);
        main.appendChild(containerSelector.element)

        //Ahora añadimos el check_in y el check_out
        const dateContainer=dateBooking()
        main.appendChild(dateContainer.element)
        const check_in=dateContainer.check_in
        const check_out= dateContainer.check_out




        
        function actualizarHoteles(){
            const ciudadSeleccionada=containerSelector.select.value
            const checkInDate= check_in.value ? new Date(check_in.value) : null
            const checkOutDate= check_out.value ? new Date(check_out.value) : null
            const capacidadMax=inputNumero.value ? inputNumero.value: null
            
            // borrar las anteriores
            const oldCards = main.querySelector(".hotel-cards")
            if (oldCards) oldCards.remove()
                
                // generar nuevas
                const cards = hotelCard(hoteles, ciudadSeleccionada, checkInDate, checkOutDate,capacidadMax)
                main.appendChild(cards.element)
            }
            
            check_in.addEventListener("change",(e)=>{
                const dia =e.target.value
                if(dia){
                    check_out.min=dia
                    if (check_out.value < dia) {
                        check_out.value = dia;
                    }
                    
                }            
                
        })
        
        // Carrito de reservas
        const carritoReserva = document.createElement("div")
        carritoReserva.classList.add("carrito-reserva")
        
        const carritoTitulo = document.createElement("h3")
        carritoTitulo.textContent = "🛒 Carrito de Reservas"
        carritoReserva.appendChild(carritoTitulo)
        
        const carritoLista = document.createElement("div")
        carritoLista.classList.add("carrito-lista")
        carritoReserva.appendChild(carritoLista)
        
        const carritoTotal = document.createElement("p")
        carritoTotal.classList.add("carrito-total")
        carritoReserva.appendChild(carritoTotal)
        
        // Función para actualizar la vista del carrito
        function actualizarCarrito() {
            const carrito = getMapFromLocalStorage("CARRITO_RESERVAS")
            carritoLista.innerHTML = ""
            
            if (carrito.size === 0) {
                carritoLista.innerHTML = "<p>No hay reservas en el carrito</p>"
                carritoTotal.textContent = "Total: 0€"
                return
            }
            
            let total = 0
            carrito.forEach((reserva, id) => {
                const item = document.createElement("div")
                item.classList.add("carrito-item")
                
                const itemInfo = document.createElement("div")
                itemInfo.innerHTML = `
                    <strong>${reserva.hotelNombre}</strong>
                    <br>Precio: ${reserva.precioNoche}€/noche
                `
                
                const btnEliminar = document.createElement("button")
                btnEliminar.textContent = "❌"
                btnEliminar.classList.add("btn-eliminar")
                btnEliminar.onclick = () => {
                    carrito.delete(id)
                    setMapToLocalStorage("CARRITO_RESERVAS", carrito)
                    actualizarCarrito()
                }
                
                item.appendChild(itemInfo)
                item.appendChild(btnEliminar)
                carritoLista.appendChild(item)
                
                total += reserva.precioNoche
            })
            
            carritoTotal.textContent = `Total: ${total}€`
        }
        
        // Escuchar evento de actualización del carrito
        window.addEventListener('carritoActualizado', actualizarCarrito)
        
        // Actualizar carrito al cargar
        actualizarCarrito()
        
        main.appendChild(carritoReserva)



        const button = document.createElement("button")
        button.type = "submit"
        button.name = "btnFinalizarReservar"
        button.textContent = "Finalizar Compra"
        button.classList.add("btn-finalizar")
        main.appendChild(button)
        
        button.addEventListener("click", async () => {
            const carrito = getMapFromLocalStorage("CARRITO_RESERVAS")
            
            if (carrito.size === 0) {
                alert("⚠️ El carrito está vacío. Agrega hoteles antes de finalizar.")
                return
            }
            
            // Convertir Map a array para guardar en db.json
            const reservasArray = Array.from(carrito.values()).map(reserva => ({
                ...reserva,
                id: Math.random().toString(36).substr(2, 9),
                estado: "confirmada",
                fechaCompra: new Date().toISOString()
            }))
            
            try {
                // Guardar cada reserva en el servidor
                const promises = reservasArray.map(reserva => 
                    fetch(`http://localhost:1997/reservas`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(reserva)
                    })
                )
                
                await Promise.all(promises)
                
                // Guardar también en localStorage como historial
                let historial = JSON.parse(localStorage.getItem("HISTORIAL_RESERVAS") || "[]")
                historial.push(...reservasArray)
                localStorage.setItem("HISTORIAL_RESERVAS", JSON.stringify(historial))
                
                // Limpiar carrito
                localStorage.removeItem("CARRITO_RESERVAS")
                setMapToLocalStorage("CARRITO_RESERVAS", new Map())
                
                alert(`✅ ¡Compra finalizada con éxito! Se guardaron ${reservasArray.length} reserva(s)`)
                
                // Actualizar vista
                actualizarCarrito()
                
            } catch (error) {
                console.error("Error al finalizar compra:", error)
                alert("❌ Error al procesar la compra. Por favor intenta de nuevo.")
            }
        })


        check_out.addEventListener("change", actualizarHoteles)
        containerSelector.select.addEventListener("change", actualizarHoteles)
        check_in.addEventListener("change", actualizarHoteles)
        inputNumero.addEventListener("change",actualizarHoteles)
        
        container.appendChild(main)

        return container
    
    }

    const render=async ()=>{
        const container=document.createElement("div")
        const v1Wrapped= await renderBooking()
        
        container.appendChild(v1Wrapped)

        return container
    }

    return {
        render
    }
}

export default bookingApp
