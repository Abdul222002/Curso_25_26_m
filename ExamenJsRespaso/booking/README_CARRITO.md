# 🏨 Sistema de Reservas de Hoteles - Guía de Uso

## ✅ Funcionalidades Implementadas

### 1. **Carrito de Reservas**
- Añade múltiples hoteles al carrito haciendo clic en "Agregar al Carrito"
- Visualiza todas las reservas agregadas en tiempo real
- Elimina reservas individuales del carrito
- Calcula el precio total automáticamente

### 2. **Filtros de Búsqueda**
- **Ciudad**: Selecciona entre Madrid, Barcelona, Valencia y Sevilla
- **Fechas**: Check-in y check-out con validación automática
- **Capacidad**: Filtra hoteles por número de personas
- **Disponibilidad**: Solo muestra hoteles disponibles en las fechas seleccionadas

### 3. **Finalizar Compra**
- Guarda todas las reservas en `localStorage` como historial
- Envía las reservas al servidor (`db.json`)
- Limpia el carrito automáticamente tras la compra
- Muestra confirmación de éxito

## 🚀 Cómo Usar

### Paso 1: Iniciar el Servidor JSON
```powershell
npx json-server -p 1997 -w src/db/db.json
```

### Paso 2: Iniciar la Aplicación
```powershell
npm run dev
```

### Paso 3: Usar la Aplicación
1. **Filtra hoteles** por ciudad, fechas y capacidad
2. **Agrega hoteles** al carrito haciendo clic en cada tarjeta
3. **Revisa el carrito** en la sección "🛒 Carrito de Reservas"
4. **Finaliza la compra** haciendo clic en "Finalizar Compra"

## 💾 Almacenamiento

### LocalStorage
- `CARRITO_RESERVAS`: Map con las reservas pendientes
- `HISTORIAL_RESERVAS`: Array con todas las compras finalizadas

### Base de Datos (db.json)
- Las reservas finalizadas se guardan en el endpoint `/reservas`

## 📊 Estructura de una Reserva

```json
{
  "id": "abc123",
  "hotelId": 1,
  "hotelNombre": "Hotel Gran Madrid",
  "ciudad": 1,
  "estrellas": 4,
  "precioNoche": 90,
  "capacidadMax": 4,
  "imagen": "https://...",
  "checkIn": "2025-01-15",
  "checkOut": "2025-01-20",
  "estado": "confirmada",
  "fechaReserva": "2025-12-04T10:30:00.000Z",
  "fechaCompra": "2025-12-04T10:35:00.000Z"
}
```

## 🎨 Estilos CSS Añadidos
- `.carrito-reserva`: Contenedor principal del carrito
- `.carrito-item`: Cada item del carrito
- `.carrito-total`: Precio total
- `.btn-agregar`: Botón para agregar al carrito
- `.btn-eliminar`: Botón para quitar del carrito
- `.btn-finalizar`: Botón de finalizar compra

## 🔧 Funciones Principales

### En `hotelCard.js`
- Botón "Agregar al Carrito" que guarda reservas en localStorage
- Dispara evento `carritoActualizado` para actualizar la UI

### En `bookingApp.js`
- `actualizarCarrito()`: Renderiza el carrito con todas las reservas
- Botón "Finalizar Compra": Envía reservas al servidor y limpia el carrito
- Escucha evento `carritoActualizado` para actualizar en tiempo real

### En `localStorage.js`
- `setMapToLocalStorage()`: Guarda Map en localStorage
- `getMapFromLocalStorage()`: Recupera Map desde localStorage

## ✨ Mejoras Implementadas
- ✅ Carrito funcional con múltiples reservas
- ✅ Persistencia en localStorage
- ✅ Guardado en base de datos
- ✅ Cálculo automático de totales
- ✅ Validación de fechas
- ✅ Filtros dinámicos
- ✅ UI responsive con estilos modernos
- ✅ Eventos personalizados para actualización en tiempo real
