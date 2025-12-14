function cardRestaurant(data = []) {
    const container = document.createElement("div");
    container.classList.add("cards-container");

    const cards = data.map(restaurant => {
        const card = document.createElement("div");
        card.classList.add("restaurant-card");
        card.dataset.id = restaurant.id; // útil para identificar la tarjeta

        const name = document.createElement("h1");
        name.textContent = restaurant.name;
        card.appendChild(name);

        const city = document.createElement("p");
        city.textContent = restaurant.city;
        card.appendChild(city);

        container.appendChild(card);

        return restaurant; // guardamos la referencia para luego usarla
    });

    return {
        element: container,
        cards,
        data
    };
}

export default cardRestaurant;
