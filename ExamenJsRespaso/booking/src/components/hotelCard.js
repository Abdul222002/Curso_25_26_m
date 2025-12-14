import { getMapFromLocalStorage, setMapToLocalStorage } from "../helpers/localStorage";

export const hotelCard = (data,ciudad,check_in=null,check_out=null,numPersonas=null) => {
    const container = document.createElement("div");
    container.classList.add("hotel-cards");

    let idCiudad;
    switch (ciudad) {
        case "Madrid":
        idCiudad = 1;
            break;
        case "Barcelona":
        idCiudad = 2;
            break;
        case "Valencia":
        idCiudad = 3
            break;
        case "Sevilla":
        idCiudad = 4;
            break;
        default:
            break;
        }
    
    let hotelesFiltrados = data.filter(h => h.ciudadId === idCiudad);
    
    if(numPersonas){
        hotelesFiltrados=hotelesFiltrados.filter(hotel=>(numPersonas<=hotel.capacidadMax))
    }

    if (check_in && check_out) {
        hotelesFiltrados = hotelesFiltrados.filter(hotel =>
            hotel.disponibilidad.some(periodo => {
                const desde = new Date(periodo.desde);
                const hasta = new Date(periodo.hasta);
                return desde <= check_in && hasta >= check_out;
            })
        );
    }

    hotelesFiltrados.forEach(hotel=>{
        const card = document.createElement("div");
        card.classList.add("hotel-card");

        // Título
        const titulo = document.createElement("h3");
        titulo.textContent = hotel.nombre;
        card.appendChild(titulo);

        // Estrellas
        const rating = document.createElement("p");
        rating.textContent = `${hotel.estrellas} ⭐`;
        card.appendChild(rating);

        //ciudad
        const ciudadIp = document.createElement("p");
        
        switch (hotel.ciudadId) {
        case 1:
        ciudadIp.textContent = "Madrid";
            break;
        case 2:
        ciudadIp.textContent = "Barcelona";
            break;
        case 3:
        ciudadIp.textContent = "Valencia";
            break;
        case 4:
        ciudadIp.textContent = "Sevilla";
            break;
        default:
            break;
        }
        card.appendChild(ciudadIp);
                            
        // Precio
        const precio = document.createElement("p");
        precio.textContent = `${hotel.precioNoche}€/noche`;
        card.appendChild(precio);

        // Capacidad máxima
        const capMax = document.createElement("p");
        capMax.textContent = `Máx: ${hotel.capacidadMax} huéspedes`;
        card.appendChild(capMax);

        // Imagen
        const img = document.createElement("img");
        img.alt = `Imagen de ${hotel.nombre}`;
        img.src = hotel.imagen;
        img.style.width = "100%";
        img.style.borderRadius = "8px";
    
        
        card.appendChild(img);
    
        
        // Botón para agregar al carrito
        const btnAgregar = document.createElement("button");
        btnAgregar.textContent = "Agregar al Carrito";
        btnAgregar.classList.add("btn-agregar");
        card.appendChild(btnAgregar);

        btnAgregar.addEventListener("click", (e) => {
            e.stopPropagation();
            
            // Obtener fechas del localStorage o valores actuales
            const reserva = {
                hotelId: hotel.id,
                hotelNombre: hotel.nombre,
                ciudad: hotel.ciudadId,
                estrellas: hotel.estrellas,
                precioNoche: hotel.precioNoche,
                capacidadMax: hotel.capacidadMax,
                imagen: hotel.imagen,
                checkIn: check_in || null,
                checkOut: check_out || null,
                fechaReserva: new Date().toISOString()
            };

            // Obtener carrito actual
            let carrito = getMapFromLocalStorage("CARRITO_RESERVAS");
            
            // Agregar la reserva con ID único (timestamp + hotelId)
            const reservaId = `${Date.now()}_${hotel.id}`;
            carrito.set(reservaId, reserva);
            
            // Guardar en localStorage
            setMapToLocalStorage("CARRITO_RESERVAS", carrito);
            
            alert(`✅ ${hotel.nombre} agregado al carrito`);
            
            // Disparar evento personalizado para actualizar UI
            window.dispatchEvent(new CustomEvent('carritoActualizado'));
        });
        card.dataset.hotelId = hotel.id;
        container.appendChild(card);
    });

    return {
        element: container
    };
};
