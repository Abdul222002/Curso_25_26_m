import { usuariosConHabilidades } from "../db/data";

export default function createEjercicio6() {
    
    const notfeching = () => {
        return usuariosConHabilidades;
    };

    const render = () => {
        const container = document.createElement("div");
        container.classList.add("users-container");
        container.innerHTML = `
            <h2>Ejercicio 6: Obtener usuarios con habilidades</h2>
            <h3 class="title" style="text-align: center;">Equipo:</h3>
        `;

        const data = notfeching();
        
        data.forEach(user => {
            // Tarjeta Usuario
            const card = document.createElement("div");
            card.classList.add("user-card");

            // Nombre
            const name = document.createElement("h3");
            name.classList.add("user-name");
            name.textContent = user.nombre;
            card.appendChild(name);

            // Info
            const user_info = document.createElement("p");
            user_info.classList.add("user-info");
            user_info.textContent = `${user.email} | ${user.edad}`;
            card.appendChild(user_info);

            // Habilidades
            const habilidadContainer = document.createElement("div");
            habilidadContainer.classList.add("skills-container");

            const habilidades = document.createElement("ul");

            user.habilidades.forEach(habilidade => {
                const habilidad = document.createElement("li");
                habilidad.classList.add("skill-tag");
                habilidad.textContent = habilidade;
                habilidades.appendChild(habilidad);
            });

            // ❗ Añadimos la lista una sola vez
            habilidadContainer.appendChild(habilidades);
            card.appendChild(habilidadContainer);

            // Nivel
            const userNivel = document.createElement("p");
            userNivel.classList.add("level-badge");

            if (user.nivel === "senior") {
                userNivel.classList.add("level-badge",user.nivel);
            } else if (user.nivel === "junior") {
                userNivel.classList.add("level-badge",user.nivel);
            }

            userNivel.textContent = "Nivel: " + user.nivel;
            card.appendChild(userNivel);

            container.appendChild(card);
        });

        return container;
    };

    return { render };
}
