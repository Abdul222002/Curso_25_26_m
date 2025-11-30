import { menuRestaurante } from "../db/data";

function createEjercicio8() {

    const notfeching = () => menuRestaurante;

    const render = () => {

        const data = notfeching();

        const container = document.createElement("div");
        container.classList.add("menu-container");

        container.innerHTML = `
            <h2>Ejercicio 8: Menú de restaurante</h2>
        `;

        const titulo = document.createElement("h3");
        titulo.classList.add("restaurant-title");
        titulo.textContent = "Los manoletes Gourmets";
        container.appendChild(titulo);

        data.categorias.forEach(categoria => {

            // ---- SECCIÓN ----
            const seccion = document.createElement("div");
            seccion.classList.add("menu-category");

            // TÍTULO
            const categoriaTitulo = document.createElement("h4");
            categoriaTitulo.classList.add("category-title");
            categoriaTitulo.textContent = categoria.nombre;

            // DIVISOR
            const divisor = document.createElement("hr");
            divisor.classList.add("category-divider");

            // CONTENEDOR PLATOS
            const contenedorPlatos = document.createElement("div");
            contenedorPlatos.classList.add("dishes-container");

            // Montaje
            seccion.appendChild(categoriaTitulo);
            seccion.appendChild(divisor);
            seccion.appendChild(contenedorPlatos);

            // Meter la sección SOLO UNA VEZ
            container.appendChild(seccion);

            // ---- PLATOS ----
            categoria.platos.forEach(plato => {
                const containerPlato = document.createElement("div");
                containerPlato.classList.add("dish-item");

                const platoNombrePrecio = document.createElement("div");
                platoNombrePrecio.classList.add("dish-header");

                const nombrePlato = document.createElement("h5");
                nombrePlato.classList.add("dish-name");
                nombrePlato.textContent = plato.nombre;

                const precioPlato = document.createElement("span");
                precioPlato.classList.add("dish-price");
                precioPlato.textContent = `${plato.precio.toFixed(2)} €`;

                platoNombrePrecio.appendChild(nombrePlato);
                platoNombrePrecio.appendChild(precioPlato);

                const descripcionPlato = document.createElement("p");
                descripcionPlato.classList.add("dish-description");
                descripcionPlato.textContent = plato.descripcion;

                containerPlato.appendChild(platoNombrePrecio);
                containerPlato.appendChild(descripcionPlato);

                contenedorPlatos.appendChild(containerPlato);
            });

            // ---- Evento toggle usando nextElementSibling ----
            categoriaTitulo.addEventListener("click", () => {

                // Divisor
                const divider = categoriaTitulo.nextElementSibling;

                // Contenedor platos
                const platosDiv = divider.nextElementSibling;

                categoriaTitulo?.classList.toggle("active");
                platosDiv.classList.toggle("open");

            });

        });

        return container;
    };

    return { render };
}

export default createEjercicio8;
