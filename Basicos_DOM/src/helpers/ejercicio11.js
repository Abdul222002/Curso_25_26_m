/*
Ejercicio 3: Buscador Rick and Morty
Objetivo: Asincrónica(fetch) + optimización (debounce)
*/

export default function createEjercicio11() {

    const VITE_API_URL = import.meta.env.VITE_API_URL || "http://rickandmortyapi.com/api/";
    const state = {
        cache: new Map(),
        isLoading: false,
    };

    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    const search = async (query) => {
        const term = query.trim().toLowerCase();

        if (!term) {
            displayEmpty();
            return;
        }

        // Cache hit
        if (state.cache.has(term)) {
            console.log("Cache hit for term:", term); 
            displayCharacters(state.cache.get(term));
            return;
        }

        if (state.isLoading) return;

        displayLoading();
        state.isLoading = true;

        try {
            const response = await fetch(`${VITE_API_URL}character/?name=${term}`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            state.cache.set(term, data.results);

            displayCharacters(data.results);

        } catch (error) {
            console.error("Fetch error:", error);
            displayError();
        } finally {
            state.isLoading = false;
        }
    };

    const displayCharacters = (charactersArray) => {
        const container = document.getElementById('resultsContainer');

        if (!charactersArray || charactersArray.length === 0) {
            displayEmpty();
            return;
        }

        container.innerHTML =
            charactersArray.map(character => `
            <div>
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
            </div>
        `).join('');
    };

    const displayError = () => {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `
            <h3 class="error">❌ Ha ocurrido un error en la búsqueda</h3>
        `;
    };

    const displayEmpty = () => {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `
            <h3 class="empty">No hay resultados</h3>
        `;
    };

    const displayLoading = () => {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `
              <div class="spinner"></div>
        `;
    };

    const render = () => {
        const container = document.createElement('div');

        container.innerHTML = `
            <h2>Buscador de personajes de Rick and Morty</h2>
            <input type="text" id="searchInput" placeholder="Escribe un nombre..."/>
            <div id="resultsContainer" class="grid"></div>
        `;

        const input = container.querySelector('#searchInput');

        const debouncedSearch = debounce((event) => {
            search(event.target.value);
        }, 2000);

        input.addEventListener('input', (event) => {
            displayLoading();       // Spinner inmediato
            debouncedSearch(event); // Búsqueda después del debounce
        });

        return container;
    };

    return {
        render
    };
}
