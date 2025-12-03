import { eventos } from "../db/data";

export function createEjercicio9() {

    const render = () => {
        const data = eventos;

        // 🔥 NOMBRE DE CLASE CORREGIDO
        const container = document.createElement("div");
        container.classList.add("timeline-container");

        container.innerHTML = `
            <h2 class="timeline-title">📅 Timeline de eventos</h2>
        `;

        const lineTemporal = document.createElement("div");
        lineTemporal.classList.add("timeline-line");

        container.insertAdjacentElement("beforeend", lineTemporal);
        data.forEach((evento, index) => {

            const eventoDiv = document.createElement("div");
            eventoDiv.classList.add("timeline-item");

            // Alternar posición
            if (index % 2 === 0) {
                eventoDiv.classList.add("left");
            } else {
                eventoDiv.classList.add("right");
            }

            const contenidoEvento = document.createElement("div");
            contenidoEvento.classList.add("event-content");

            // Título
            const tituloEvento = document.createElement("h3");
            tituloEvento.textContent = evento.nombre;
            tituloEvento.classList.add("event-title");
            contenidoEvento.appendChild(tituloEvento);

            // Fecha formateada
            const fechaEvento = document.createElement("p");
            fechaEvento.textContent =
                new Date(evento.fecha).toLocaleDateString("es-ES") +
                " - " +
                evento.hora;
            fechaEvento.classList.add("event-datetime");
            contenidoEvento.appendChild(fechaEvento);

            // Lugar
            const lugarEvento = document.createElement("p");
            lugarEvento.textContent = "📍 " + evento.lugar;
            lugarEvento.classList.add("event-location");
            contenidoEvento.appendChild(lugarEvento);

            // Ponentes
            const speakerEvento = document.createElement("div");
            speakerEvento.classList.add("speakers-list");

            const ul = document.createElement("ul");
            evento.ponentes.forEach((ponente) => {
                const li = document.createElement("li");
                li.textContent = "👤 " + ponente;
                ul.appendChild(li);
            });

            speakerEvento.appendChild(ul);
            contenidoEvento.appendChild(speakerEvento);

            // Meta: precio + asistentes
            const metaEvento = document.createElement("div");
            metaEvento.classList.add("event-meta");

            const asistentes = document.createElement("p");
            asistentes.textContent =
                "€" + evento.precio + " | " + evento.asistentes + " asistentes";

            metaEvento.appendChild(asistentes);
            contenidoEvento.appendChild(metaEvento);

            eventoDiv.appendChild(contenidoEvento);
            container.appendChild(eventoDiv);
        });

        return container;
    };

    return { render };
}
