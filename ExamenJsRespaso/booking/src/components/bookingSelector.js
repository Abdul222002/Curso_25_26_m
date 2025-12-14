function bookingSelector(data) {
    const container = document.createElement("div");
    const select = document.createElement("select");

    data.forEach(ciudad => {
        const option = document.createElement("option");
        option.textContent = ciudad.nombre;
        option.value = ciudad.nombre; // mejor usar id
        select.appendChild(option);
    });

    container.appendChild(select);

    return { element: container, select }
}

export default bookingSelector;
