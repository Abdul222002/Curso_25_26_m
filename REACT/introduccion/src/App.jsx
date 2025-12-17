import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Padre from './components/Padre'
import HIjo from './components/HIjo'
import Card from './components/Card'
import Mensaje from './components/Mensaje'
import MovieGrid from './components/MovieGrid'

function App() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState("🤍")
  const [star, setStar] = useState("")

  const handleToggleLike = () => {
    setLike(prev => (prev === "🤍" ? "❤️" : "🤍"))

    setStar(prev => {
      if (prev === "game over") return prev
      if (prev.length < 5) return prev + "⭐"
      return "game over"
    })
  }

  return (
    <>
      {/* ===== CÓDIGO ORIGINAL (NO BORRAR) ===== */}

      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <button onClick={handleToggleLike}>{like}</button>

      <p className="read-the-docs">
        {star}
      </p>

      <Padre saludo="Hola_mundo" nombre="Juan" edad={30} datos={{ edad: 50, isRoot: false }}>
        <HIjo />
      </Padre>

      <Card src="./assets/react.svg" texto="React Logo" />
      <button onClick={handleToggleLike}>{like}</button>
      <p>{star}</p>
      */}

      {/* ===== CÓDIGO ACTIVO ===== */}

      <MovieGrid />
    </>
  )
}

export default App
