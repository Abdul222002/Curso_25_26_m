import { ejercicioSistemaReservas } from './helpers/sistemaReservas'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`
ejercicioSistemaReservas();