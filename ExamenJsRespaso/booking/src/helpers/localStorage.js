export function setMapToLocalStorage(clave, map) {
    // Convertimos el Map a array de pares y lo guardamos como string
    const data = Array.from(map.entries());
    localStorage.setItem(clave, JSON.stringify(data));
}

export function getMapFromLocalStorage(clave) {
    const data = localStorage.getItem(clave);
    return data ? new Map(JSON.parse(data)) : new Map();
}
