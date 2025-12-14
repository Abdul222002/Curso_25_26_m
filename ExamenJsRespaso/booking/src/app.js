import bookingApp from "./components/bookingApp"

async function createApp() {
    const app = document.getElementById("app")
    const root = await bookingApp().render()
    app.appendChild(root)
}

export default createApp
