import restaurantApp from "./components/restaurantApp"

function createApp() {
    const app=document.getElementById('app')
    app.innerHTML=`
    <h1>Restaurant hoteles</h1>
    `
    app.appendChild(restaurantApp().render())
}

export default createApp
