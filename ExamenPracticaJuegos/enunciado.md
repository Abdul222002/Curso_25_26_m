# 🎮 EXAMEN: GameStore Pro - Tu Tienda de Videojuegos

**Examen de JavaScript - Desarrollo Web en Entorno Cliente**

⚠️ **IMPORTANTE**: Añade tu nombre y apellidos a TODOS los ficheros JavaScript que entregues

---

## 🌐 API Local Disponible

Durante el examen tendrás acceso a una API REST local:

- **URL**: `http://192.168.50.120:3000/api/games`
- **Método**: GET
- **Respuesta**: JSON con array de 120 videojuegos
- **Imágenes**: Las portadas se sirven desde `http://192.168.50.120:3000/images/game-X.jpg`

### 📖 Estructura de cada videojuego (JSON):

```json
{
  "id": 1,
  "title": "The Legend of Zelda: Breath of the Wild",
  "developer": "Nintendo",
  "year": 2017,
  "price": 59.99,
  "platform": "Nintendo Switch",
  "genre": "Aventura",
  "rating": 9.5,
  "stock": 15,
  "description": "Explora un vasto mundo abierto lleno de aventuras.",
  "cover": "/images/game-1.jpg"
}
```

---

## 🗂️ ESTRUCTURA DEL PROYECTO

El profesor ya te proporcionará un proyecto Vite + JavaScript Vanilla con esta estructura base:

```
examen-gamestore/
├── index.html          ← Ya configurado con <div id="app"></div>
├── package.json        ← crea scripts para iniciar Vite
└── src/               ← Aquí trabajarás
    ├── main.js        ← Entry point (TÚ LO COMPLETAS)
    ├── app.js         ← Cerebro de la app (TÚ LO CREAS)
    ├── style.css      ← Proporcionado (copiar el que está en moodle)
    ├── api/
    │   └── gameAPI.js     ← API REST (TÚ LO CREAS)
    ├── components/
    │   └── GameCard.js    ← Tarjetas de juegos (TÚ LO CREAS)
    └── utils/
        └── storage.js     ← LocalStorage (TÚ LO CREAS)
```

---

## 📦 ARCHIVOS PROPORCIONADOS

Recibirás:
- ✅ Proyecto Vite ya inicializado
- ✅ `index.html` con estructura básica
- ✅ `style.css` completo (con comentarios de ayuda. Está en moodle)
- ✅ Este enunciado
- ✅ Archivo `games.json` con 120 videojuegos

---

## 🚫 RESTRICCIONES OBLIGATORIAS

✅ **Obligatorio usar**:
- JavaScript Vanilla puro (sin frameworks)
- `createElement()` y `appendChild()` para crear elementos DOM
- `async/await` para peticiones API (o `.then()` si prefieres)
- Módulos ES6 (`import` / `export`)

---

## 📝 PARTES DEL EXAMEN

### 📱 Parte 1: main.js - Entry Point (0.5 puntos)

**Archivo**: `src/main.js`

Este archivo es el punto de entrada de la aplicación. Debe ser MUY simple.

**Funcionalidad requerida**:
1. Importar el archivo CSS
2. Importar la función `createApp` desde `app.js`
3. Ejecutar la función `createApp()`

**Ejemplo de código esperado**:
```javascript
// Nombre: [TU NOMBRE COMPLETO]
// src/main.js

import './style.css';
import { createApp } from './app.js';

createApp();
```

---

### 🌐 Parte 2: API REST con Factory Function (2.0 puntos)

**Archivo**: `src/api/gameAPI.js`

Este módulo centraliza todas las peticiones a la API REST.

**Concepto clave: Factory Function**

Una factory function es una función que retorna un objeto con métodos. Es un patrón simple y efectivo para organizar código relacionado.

**Funcionalidades requeridas**:

1. **Función `createGameAPI()`**: Factory function que retorna objeto con métodos
   
2. **Método `fetchAllGames()`**: 
   - Hace petición GET a la API
   - Retorna array de juegos
   - Maneja errores con try/catch
   - Valor: **0.8 puntos**

3. **Método `getGameById(id)`**: 
   - Recibe un ID
   - Retorna el juego específico o null
   - Valor: **0.6 puntos**

4. **Método `getGamesByPlatform(platform)`**: 
   - Recibe nombre de plataforma
   - Retorna array de juegos filtrados
   - Valor: **0.6 puntos**

**Ejemplo de estructura esperada**:
```javascript
// Nombre: [TU NOMBRE COMPLETO]
// src/api/gameAPI.js

const API_URL = 'http://192.168.50.120:3000/api/games';

export function createGameAPI() {
  return {
    async fetchAllGames() {
      // TU CÓDIGO AQUÍ
    },
    
    async getGameById(id) {
      // TU CÓDIGO AQUÍ
    },
    
    async getGamesByPlatform(platform) {
      // TU CÓDIGO AQUÍ
    }
  };
}
```

---

### 💾 Parte 3: Storage - Persistencia con LocalStorage (1.5 puntos)

**Archivo**: `src/utils/storage.js`

Sistema para persistir los IDs de los juegos en el carrito y favoritos.

**Concepto: LocalStorage**

LocalStorage permite guardar datos en el navegador que persisten incluso al cerrar la pestaña. Ideal para guardar preferencias del usuario.

**Funciones requeridas**:

1. **`getCart()`** (0.3 pts):
   - Retorna array de IDs del carrito
   - Clave: `"gamestore-cart"`
   
2. **`addToCart(gameId)`** (0.3 pts):
   - Añade ID al carrito
   - Evita duplicados
   
3. **`removeFromCart(gameId)`** (0.3 pts):
   - Elimina ID del carrito
   
4. **`isInCart(gameId)`** (0.2 pts):
   - Verifica si está en carrito
   
5. **`getFavorites()`** (0.2 pts):
   - Retorna array de IDs favoritos
   - Clave: `"gamestore-favorites"`
   
6. **`toggleFavorite(gameId)`** (0.2 pts):
   - Añade o quita de favoritos
   - Retorna true si se añadió, false si se quitó

**💡 Datos guardados en localStorage**:
```javascript
// Ejemplos:
"gamestore-cart" → "[3, 7, 15, 28]"
"gamestore-favorites" → "[1, 5, 12, 23, 45]"
```

---

### 🧠 Parte 4: app.js - Cerebro de la Aplicación (3.5 puntos)

**Archivo**: `src/app.js`

Este es el archivo más importante del examen. Aquí coordinas toda la lógica de la aplicación.

**Responsabilidades**:
1. Crear estructura HTML con JavaScript
2. Gestionar el estado de la aplicación
3. Implementar sistema de filtros múltiples
4. Renderizar juegos dinámicamente
5. Manejar eventos de usuario

**Estructura HTML a crear**:

```html
<header class="header">
  <h1>🎮 GameStore Pro - [TU NOMBRE]</h1>
  <div class="cart-indicator">🛒 <span id="cart-count">0</span></div>
</header>

<main class="main-container">
  <!-- Barra de búsqueda -->
  <div class="search-container">
    <input type="text" id="search-input" class="search-input" 
           placeholder="Buscar por título o desarrollador...">
  </div>
  
  <!-- Filtros -->
  <div class="filters-section">
    <!-- Botones de género -->
    <div class="genres-container">
      <button class="genre-btn active" data-genre="Todos">Todos</button>
      <button class="genre-btn" data-genre="Aventura">Aventura</button>
      <button class="genre-btn" data-genre="Acción">Acción</button>
      <button class="genre-btn" data-genre="RPG">RPG</button>
      <button class="genre-btn" data-genre="Deportes">Deportes</button>
      <button class="genre-btn" data-genre="Estrategia">Estrategia</button>
      <button class="genre-btn" data-genre="Shooter">Shooter</button>
    </div>
    
    <!-- Selector de plataforma -->
    <div class="platform-selector">
      <label for="platform-select">Plataforma:</label>
      <select id="platform-select" class="platform-select">
        <option value="Todas">Todas las plataformas</option>
        <option value="PC">PC</option>
        <option value="PlayStation 5">PlayStation 5</option>
        <option value="Xbox Series X">Xbox Series X</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="PlayStation 4">PlayStation 4</option>
      </select>
    </div>
    
    <!-- Selector de ordenación -->
    <div class="sort-selector">
      <label for="sort-select">Ordenar por:</label>
      <select id="sort-select" class="sort-select">
        <option value="default">Por defecto</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="rating-desc">Mejor valorados</option>
        <option value="year-desc">Más recientes</option>
      </select>
    </div>
  </div>
  
  <!-- Contenedor de juegos -->
  <div id="games-container" class="games-container"></div>
</main>
```

**Funciones principales a implementar**:

1. **`createApp()`** (0.5 pts):
   - Crea toda la estructura HTML
   - Monta la aplicación en `#app`
   - Inicializa la carga de datos

2. **`loadGames()`** (0.5 pts):
   - Obtiene juegos de la API
   - Guarda en variable de estado
   - Llama a `renderGames()`

3. **`renderGames(filteredGames)`** (1.0 pts):
   - Recibe array de juegos
   - Limpia contenedor
   - Crea y añade GameCards
   - Muestra mensaje si no hay resultados

4. **`filterGames()`** (1.0 pts):
   - Aplica TODOS los filtros activos:
     - Búsqueda por texto
     - Género seleccionado
     - Plataforma seleccionada
   - Aplica ordenación seleccionada
   - Llama a `renderGames()` con resultado

5. **`setupEventListeners()`** (0.5 pts):
   - Input búsqueda (evento `input`)
   - Botones de género (evento `click`)
   - Selector de plataforma (evento `change`)
   - Selector de ordenación (evento `change`)

---

### 📖 Parte 5: GameCard - Componente Tarjeta (2.5 puntos)

**Archivo**: `src/components/GameCard.js`

Componente que crea una tarjeta visual para cada juego con múltiples interacciones.

**Funcionalidad**:

Exportar una función `createGameCard(game)` que retorna un elemento DOM con la tarjeta del juego.

**Estructura de la tarjeta**:

```html
<div class="game-card" data-game-id="[ID]">
  <img class="game-cover" src="..." alt="...">
  <div class="game-info">
    <h3 class="game-title">Título del juego</h3>
    <p class="game-developer">Desarrollador</p>
    <p class="game-platform">🎮 Plataforma</p>
    <div class="game-meta">
      <span class="game-price">$59.99</span>
      <span class="game-rating">⭐ 9.5</span>
    </div>
    <p class="game-genre">Género</p>
    <p class="game-stock">📦 En stock: 15</p>
  </div>
</div>
```

**Eventos interactivos**:

1. **Click izquierdo** (0.5 pts):
   - Toggle clase `game-favorite` en la tarjeta
   - Llamar a `toggleFavorite()` de storage
   - Actualizar UI (añadir/quitar icono ❤️)

2. **Doble click** (0.5 pts):
   - Añadir al carrito usando `addToCart()`
   - Añadir clase `game-in-cart` a la tarjeta
   - Actualizar contador del carrito en el header
   - Mostrar feedback visual (opcional)

3. **Click derecho** (0.5 pts):
   - Prevenir menú contextual con `e.preventDefault()`
   - Mostrar un `alert()` o crear modal con:
     - Descripción completa del juego
     - Año de lanzamiento
     - Stock disponible
     - Opción de cerrar

4. **Hover** (0.5 pts - CSS ya incluido):
   - Efecto visual de elevación
   - Cambio de borde

**Estados visuales**:
- `.game-favorite` → Borde dorado + ❤️ en esquina
- `.game-in-cart` → Borde verde + 🛒 en esquina
- `.game-out-stock` → Opacidad reducida + "AGOTADO"

---

## 🎁 BONUS OPCIONAL (+0.5 puntos máximo)

Implementa UNO O MÁS de estos extras para subir nota:

### A) Contador de juegos mostrados (0.1 pts)
Mostrar: "Mostrando 45 de 120 juegos"

### B) Contador de favoritos (0.1 pts)
Mostrar: "❤️ 7 favoritos" que se actualice en tiempo real

### C) Botón "Limpiar filtros" (0.15 pts)
Botón que resetea todos los filtros y búsqueda

### D) Modal de detalles del juego (0.2 pts)
Al hacer click derecho, en lugar de `alert()`, crear un modal HTML con:
- Portada grande
- Toda la información
- Botón cerrar funcional

### E) Total del carrito (0.2 pts)
Calcular y mostrar el precio total de todos los juegos en el carrito

### F) Filtro por rango de precio (0.3 pts)
Añadir dos inputs para precio mínimo y máximo

### G) Animaciones avanzadas (0.2 pts)
- Fade in al cargar juegos
- Shake al añadir al carrito
- Pulse en favoritos

---

## 📊 RESUMEN DE PUNTUACIÓN FINAL

| Parte | Archivo | Dificultad | Puntos |
|-------|---------|------------|--------|
| 1 | main.js | ⭐ Muy fácil | 0.5 |
| 2 | gameAPI.js | ⭐⭐ Fácil-Medio | 2.0 |
| 3 | storage.js | ⭐⭐ Fácil-Medio | 1.5 |
| 4 | app.js | ⭐⭐⭐⭐ Difícil | 3.5 |
| 5 | GameCard.js | ⭐⭐⭐ Medio | 2.5 |
| Bonus | Extras opcionales | ⭐⭐⭐ | +0.5 |
| **TOTAL** | | | **10.0** |

---

## 🎯 CONCEPTOS EVALUADOS

Este examen evalúa tu dominio de:

✅ JavaScript Vanilla moderno  
✅ Factory Functions (patrón simple)  
✅ Promesas y async/await  
✅ Fetch API y peticiones HTTP  
✅ Manipulación del DOM avanzada  
✅ Event listeners múltiples (click, dblclick, contextmenu, input, change)  
✅ Array methods (filter, find, includes, forEach, sort)  
✅ LocalStorage (guardar y recuperar datos)  
✅ Módulos ES6 (import/export)  
✅ Estructura de proyecto modular  
✅ Organización de código en componentes  
✅ Gestión de estado de aplicación  
✅ Filtros múltiples y ordenación  

---

## 📋 CRITERIOS DE EVALUACIÓN

### Código limpio y organizado (10% del total)
- Nombres de variables descriptivos
- Funciones pequeñas y reutilizables
- Comentarios donde sea necesario
- Indentación correcta

### Funcionalidad completa (70% del total)
- Todos los requisitos implementados
- Sin errores en consola
- Interacciones funcionando correctamente

### Buenas prácticas (20% del total)
- Uso correcto de async/await
- Manejo de errores
- No usar variables globales innecesarias
- Separación de responsabilidades

---

## ⏱️ TIEMPO ESTIMADO

- **Parte 1**: 5 minutos
- **Parte 2**: 30 minutos
- **Parte 3**: 25 minutos
- **Parte 4**: 60 minutos
- **Parte 5**: 40 minutos
- **Bonus**: 20 minutos extra

**Total**: ~3 horas

---

## 💡 CONSEJOS

1. **Lee todo el enunciado** antes de empezar
2. **Empieza por lo más fácil** (main.js, storage.js)
3. **Prueba cada parte** antes de continuar
4. **Usa console.log()** para depurar
5. **Guarda frecuentemente** tu trabajo
6. **Deja el bonus para el final**

---

## 📤 ENTREGA

Debes entregar una carpeta comprimida (.zip) con:
- Carpeta `src/` completa con todos tus archivos
- Todos los archivos deben tener tu nombre en comentarios
- El proyecto debe ejecutarse con `npm run dev`

**Nombre del archivo**: `ExamenJS_[TuApellido]_[TuNombre].zip`

---

¡Mucha suerte! 🚀