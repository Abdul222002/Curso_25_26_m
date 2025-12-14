// =============================================================================
// 📚 GUÍA CON EJEMPLOS DE SOLUCIÓN - GameStore Pro
// =============================================================================
// Este archivo contiene ejemplos y pistas para ayudarte a completar el examen
// NO copies y pegues directamente - úsalo como referencia para entender
// =============================================================================

// =============================================================================
// PARTE 1: main.js (0.5 puntos) - EJEMPLO COMPLETO
// =============================================================================
/*
// Nombre: [TU NOMBRE COMPLETO]
// src/main.js

import './style.css';
import { createApp } from './app.js';

createApp();
*/

// =============================================================================
// PARTE 2: gameAPI.js (2.0 puntos) - EJEMPLO COMPLETO
// =============================================================================
/*
// Nombre: [TU NOMBRE COMPLETO]
// src/api/gameAPI.js

const API_URL = 'http://192.168.50.120:3000/api/games';

export function createGameAPI() {
  return {
    // Método 1: Obtener todos los juegos (0.8 pts)
    async fetchAllGames() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Error al cargar los juegos');
        }
        const data = await response.json();
        return data.games; // Retorna el array de juegos
      } catch (error) {
        console.error('Error en fetchAllGames:', error);
        return []; // Retorna array vacío si hay error
      }
    },
    
    // Método 2: Obtener juego por ID (0.6 pts)
    async getGameById(id) {
      try {
        const games = await this.fetchAllGames();
        return games.find(game => game.id === id) || null;
      } catch (error) {
        console.error('Error en getGameById:', error);
        return null;
      }
    },
    
    // Método 3: Obtener juegos por plataforma (0.6 pts)
    async getGamesByPlatform(platform) {
      try {
        const games = await this.fetchAllGames();
        if (platform === 'Todas') {
          return games;
        }
        return games.filter(game => game.platform === platform);
      } catch (error) {
        console.error('Error en getGamesByPlatform:', error);
        return [];
      }
    }
  };
}
*/

// =============================================================================
// PARTE 3: storage.js (1.5 puntos) - EJEMPLO COMPLETO
// =============================================================================
/*
// Nombre: [TU NOMBRE COMPLETO]
// src/utils/storage.js

const CART_KEY = 'gamestore-cart';
const FAVORITES_KEY = 'gamestore-favorites';

// Función auxiliar para obtener datos del localStorage
function getStorageData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// Función auxiliar para guardar datos en localStorage
function setStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ====================
// FUNCIONES DE CARRITO
// ====================

export function getCart() {
  return getStorageData(CART_KEY);
}

export function addToCart(gameId) {
  const cart = getCart();
  // Evitar duplicados
  if (!cart.includes(gameId)) {
    cart.push(gameId);
    setStorageData(CART_KEY, cart);
    return true;
  }
  return false;
}

export function removeFromCart(gameId) {
  const cart = getCart();
  const newCart = cart.filter(id => id !== gameId);
  setStorageData(CART_KEY, newCart);
}

export function isInCart(gameId) {
  return getCart().includes(gameId);
}

// =======================
// FUNCIONES DE FAVORITOS
// =======================

export function getFavorites() {
  return getStorageData(FAVORITES_KEY);
}

export function toggleFavorite(gameId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(gameId);
  
  if (index === -1) {
    // No está en favoritos, lo añadimos
    favorites.push(gameId);
    setStorageData(FAVORITES_KEY, favorites);
    return true; // Indica que se añadió
  } else {
    // Ya está en favoritos, lo quitamos
    favorites.splice(index, 1);
    setStorageData(FAVORITES_KEY, favorites);
    return false; // Indica que se quitó
  }
}

export function isFavorite(gameId) {
  return getFavorites().includes(gameId);
}
*/

// =============================================================================
// PARTE 4: app.js (3.5 puntos) - ESTRUCTURA Y PISTAS
// =============================================================================
/*
// Nombre: [TU NOMBRE COMPLETO]
// src/app.js

import { createGameAPI } from './api/gameAPI.js';
import { createGameCard } from './components/GameCard.js';
import { getCart } from './utils/storage.js';

// Estado global de la aplicación
let allGames = []; // Todos los juegos de la API
let currentGenre = 'Todos'; // Género seleccionado
let currentPlatform = 'Todas'; // Plataforma seleccionada
let currentSort = 'default'; // Orden seleccionado
let searchTerm = ''; // Término de búsqueda

// Instancia de la API
const gameAPI = createGameAPI();

// =============================================================================
// FUNCIÓN PRINCIPAL - Crea toda la aplicación
// =============================================================================
export function createApp() {
  const appContainer = document.querySelector('#app');
  
  // 1. Crear estructura HTML
  createHeader(appContainer);
  createMainContainer(appContainer);
  
  // 2. Cargar datos
  loadGames();
  
  // 3. Configurar eventos
  setupEventListeners();
}

// =============================================================================
// CREAR HEADER
// =============================================================================
function createHeader(parent) {
  const header = document.createElement('header');
  header.className = 'header';
  
  const title = document.createElement('h1');
  title.textContent = '🎮 GameStore Pro - [TU NOMBRE]'; // Cambia esto
  
  // Indicador de carrito
  const cartIndicator = document.createElement('div');
  cartIndicator.className = 'cart-indicator';
  cartIndicator.innerHTML = '🛒 <span id="cart-count">0</span>';
  
  header.appendChild(title);
  header.appendChild(cartIndicator);
  parent.appendChild(header);
  
  // Actualizar contador inicial
  updateCartCount();
}

// =============================================================================
// CREAR CONTENEDOR PRINCIPAL
// =============================================================================
function createMainContainer(parent) {
  const main = document.createElement('main');
  main.className = 'main-container';
  
  // Barra de búsqueda
  const searchContainer = createSearchBar();
  main.appendChild(searchContainer);
  
  // Filtros
  const filtersSection = createFiltersSection();
  main.appendChild(filtersSection);
  
  // Contenedor de juegos
  const gamesContainer = document.createElement('div');
  gamesContainer.id = 'games-container';
  gamesContainer.className = 'games-container';
  main.appendChild(gamesContainer);
  
  parent.appendChild(main);
}

// =============================================================================
// CREAR BARRA DE BÚSQUEDA
// =============================================================================
function createSearchBar() {
  const container = document.createElement('div');
  container.className = 'search-container';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search-input';
  input.className = 'search-input';
  input.placeholder = 'Buscar por título o desarrollador...';
  
  container.appendChild(input);
  return container;
}

// =============================================================================
// CREAR SECCIÓN DE FILTROS
// =============================================================================
function createFiltersSection() {
  const section = document.createElement('div');
  section.className = 'filters-section';
  
  // Botones de género
  const genresContainer = createGenreButtons();
  section.appendChild(genresContainer);
  
  // Selector de plataforma
  const platformSelector = createPlatformSelector();
  section.appendChild(platformSelector);
  
  // Selector de ordenación
  const sortSelector = createSortSelector();
  section.appendChild(sortSelector);
  
  return section;
}

// =============================================================================
// CREAR BOTONES DE GÉNERO
// =============================================================================
function createGenreButtons() {
  const container = document.createElement('div');
  container.className = 'genres-container';
  
  const genres = ['Todos', 'Aventura', 'Acción', 'RPG', 'Deportes', 'Estrategia', 'Shooter'];
  
  genres.forEach(genre => {
    const button = document.createElement('button');
    button.className = 'genre-btn';
    button.textContent = genre;
    button.dataset.genre = genre;
    
    // Marcar "Todos" como activo inicialmente
    if (genre === 'Todos') {
      button.classList.add('active');
    }
    
    container.appendChild(button);
  });
  
  return container;
}

// =============================================================================
// CREAR SELECTOR DE PLATAFORMA
// =============================================================================
function createPlatformSelector() {
  const container = document.createElement('div');
  container.className = 'platform-selector';
  
  const label = document.createElement('label');
  label.setAttribute('for', 'platform-select');
  label.textContent = 'Plataforma:';
  
  const select = document.createElement('select');
  select.id = 'platform-select';
  select.className = 'platform-select';
  
  const platforms = [
    'Todas',
    'PC',
    'PlayStation 5',
    'Xbox Series X',
    'Nintendo Switch',
    'PlayStation 4'
  ];
  
  platforms.forEach(platform => {
    const option = document.createElement('option');
    option.value = platform;
    option.textContent = platform === 'Todas' ? 'Todas las plataformas' : platform;
    select.appendChild(option);
  });
  
  container.appendChild(label);
  container.appendChild(select);
  return container;
}

// =============================================================================
// CREAR SELECTOR DE ORDENACIÓN
// =============================================================================
function createSortSelector() {
  const container = document.createElement('div');
  container.className = 'sort-selector';
  
  const label = document.createElement('label');
  label.setAttribute('for', 'sort-select');
  label.textContent = 'Ordenar por:';
  
  const select = document.createElement('select');
  select.id = 'sort-select';
  select.className = 'sort-select';
  
  const options = [
    { value: 'default', text: 'Por defecto' },
    { value: 'price-asc', text: 'Precio: Menor a Mayor' },
    { value: 'price-desc', text: 'Precio: Mayor a Menor' },
    { value: 'rating-desc', text: 'Mejor valorados' },
    { value: 'year-desc', text: 'Más recientes' }
  ];
  
  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    select.appendChild(option);
  });
  
  container.appendChild(label);
  container.appendChild(select);
  return container;
}

// =============================================================================
// CARGAR JUEGOS DESDE LA API
// =============================================================================
async function loadGames() {
  const container = document.getElementById('games-container');
  
  // Mostrar mensaje de carga
  container.innerHTML = '<div class="loading">Cargando juegos...</div>';
  
  try {
    // Obtener juegos de la API
    allGames = await gameAPI.fetchAllGames();
    
    // Renderizar los juegos
    renderGames(allGames);
  } catch (error) {
    console.error('Error al cargar juegos:', error);
    container.innerHTML = '<div class="no-results">Error al cargar los juegos. Por favor, recarga la página.</div>';
  }
}

// =============================================================================
// RENDERIZAR JUEGOS EN EL DOM
// =============================================================================
function renderGames(games) {
  const container = document.getElementById('games-container');
  container.innerHTML = ''; // Limpiar contenedor
  
  // Si no hay juegos, mostrar mensaje
  if (games.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No se encontraron juegos con los filtros seleccionados';
    container.appendChild(noResults);
    return;
  }
  
  // Crear una tarjeta por cada juego
  games.forEach(game => {
    const gameCard = createGameCard(game);
    container.appendChild(gameCard);
  });
  
  // BONUS: Actualizar contador de juegos mostrados
  // updateGamesCount(games.length);
}

// =============================================================================
// FILTRAR JUEGOS (FUNCIÓN PRINCIPAL DE FILTRADO)
// =============================================================================
function filterGames() {
  let filtered = [...allGames]; // Copia del array original
  
  // 1. Filtrar por búsqueda de texto
  if (searchTerm.trim() !== '') {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(game => 
      game.title.toLowerCase().includes(term) ||
      game.developer.toLowerCase().includes(term)
    );
  }
  
  // 2. Filtrar por género
  if (currentGenre !== 'Todos') {
    filtered = filtered.filter(game => game.genre === currentGenre);
  }
  
  // 3. Filtrar por plataforma
  if (currentPlatform !== 'Todas') {
    filtered = filtered.filter(game => game.platform === currentPlatform);
  }
  
  // 4. Ordenar según la opción seleccionada
  filtered = sortGames(filtered, currentSort);
  
  // 5. Renderizar los juegos filtrados
  renderGames(filtered);
}

// =============================================================================
// ORDENAR JUEGOS
// =============================================================================
function sortGames(games, sortType) {
  const sorted = [...games]; // Crear copia para no mutar el original
  
  switch (sortType) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    
    case 'year-desc':
      return sorted.sort((a, b) => b.year - a.year);
    
    case 'default':
    default:
      return sorted; // Mantener orden original (por ID)
  }
}

// =============================================================================
// CONFIGURAR EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
  // 1. Barra de búsqueda
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterGames();
  });
  
  // 2. Botones de género
  const genreButtons = document.querySelectorAll('.genre-btn');
  genreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Quitar clase 'active' de todos los botones
      genreButtons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir clase 'active' al botón clickeado
      e.target.classList.add('active');
      
      // Actualizar estado y filtrar
      currentGenre = e.target.dataset.genre;
      filterGames();
    });
  });
  
  // 3. Selector de plataforma
  const platformSelect = document.getElementById('platform-select');
  platformSelect.addEventListener('change', (e) => {
    currentPlatform = e.target.value;
    filterGames();
  });
  
  // 4. Selector de ordenación
  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    filterGames();
  });
}

// =============================================================================
// ACTUALIZAR CONTADOR DEL CARRITO
// =============================================================================
export function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const cart = getCart();
    cartCount.textContent = cart.length;
  }
}
*/

// =============================================================================
// PARTE 5: GameCard.js (2.5 puntos) - ESTRUCTURA Y PISTAS
// =============================================================================
/*
// Nombre: [TU NOMBRE COMPLETO]
// src/components/GameCard.js

import { toggleFavorite, isFavorite, addToCart, isInCart } from '../utils/storage.js';
import { updateCartCount } from '../app.js';

export function createGameCard(game) {
  // Crear contenedor de la tarjeta
  const card = document.createElement('div');
  card.className = 'game-card';
  card.dataset.gameId = game.id;
  
  // Verificar estados guardados en localStorage
  if (isFavorite(game.id)) {
    card.classList.add('game-favorite');
  }
  
  if (isInCart(game.id)) {
    card.classList.add('game-in-cart');
  }
  
  // Si no hay stock, añadir clase especial
  if (game.stock === 0) {
    card.classList.add('game-out-stock');
  }
  
  // Crear imagen
  const img = document.createElement('img');
  img.className = 'game-cover';
  img.src = game.cover;
  img.alt = game.title;
  img.onerror = function() {
    // Si la imagen no carga, usar una imagen por defecto
    this.src = 'https://via.placeholder.com/300x400?text=No+Image';
  };
  
  // Crear contenedor de información
  const info = document.createElement('div');
  info.className = 'game-info';
  
  // Título
  const title = document.createElement('h3');
  title.className = 'game-title';
  title.textContent = game.title;
  
  // Desarrollador
  const developer = document.createElement('p');
  developer.className = 'game-developer';
  developer.textContent = game.developer;
  
  // Plataforma
  const platform = document.createElement('p');
  platform.className = 'game-platform';
  platform.textContent = `🎮 ${game.platform}`;
  
  // Meta información (precio y rating)
  const meta = document.createElement('div');
  meta.className = 'game-meta';
  
  const price = document.createElement('span');
  price.className = 'game-price';
  price.textContent = game.price === 0 ? 'GRATIS' : `$${game.price.toFixed(2)}`;
  
  const rating = document.createElement('span');
  rating.className = 'game-rating';
  rating.textContent = `⭐ ${game.rating}`;
  
  meta.appendChild(price);
  meta.appendChild(rating);
  
  // Género
  const genre = document.createElement('p');
  genre.className = 'game-genre';
  genre.textContent = game.genre;
  
  // Stock
  const stock = document.createElement('p');
  stock.className = 'game-stock';
  stock.textContent = game.stock > 0 ? `📦 En stock: ${game.stock}` : '❌ Agotado';
  
  // Ensamblar todo
  info.appendChild(title);
  info.appendChild(developer);
  info.appendChild(platform);
  info.appendChild(meta);
  info.appendChild(genre);
  info.appendChild(stock);
  
  card.appendChild(img);
  card.appendChild(info);
  
  // =============================
  // EVENTO 1: CLICK IZQUIERDO - Toggle Favorito (0.5 pts)
  // =============================
  card.addEventListener('click', (e) => {
    // Prevenir si se hizo click derecho o doble click
    if (e.button !== 0) return;
    
    // Toggle favorito
    const isNowFavorite = toggleFavorite(game.id);
    
    // Actualizar clase visual
    if (isNowFavorite) {
      card.classList.add('game-favorite');
    } else {
      card.classList.remove('game-favorite');
    }
  });
  
  // =============================
  // EVENTO 2: DOBLE CLICK - Añadir al carrito (0.5 pts)
  // =============================
  card.addEventListener('dblclick', (e) => {
    e.preventDefault();
    
    // No añadir si no hay stock
    if (game.stock === 0) {
      alert('Este juego está agotado');
      return;
    }
    
    // Añadir al carrito
    const added = addToCart(game.id);
    
    if (added) {
      card.classList.add('game-in-cart');
      updateCartCount(); // Actualizar contador en el header
      
      // Feedback opcional
      alert(`${game.title} añadido al carrito`);
    } else {
      alert('Este juego ya está en el carrito');
    }
  });
  
  // =============================
  // EVENTO 3: CLICK DERECHO - Mostrar detalles (0.5 pts)
  // =============================
  card.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevenir menú contextual del navegador
    
    // Opción 1: Usar alert simple
    const details = `
📝 ${game.title}

👨‍💻 Desarrollador: ${game.developer}
📅 Año: ${game.year}
💰 Precio: ${game.price === 0 ? 'GRATIS' : '$' + game.price}
🎮 Plataforma: ${game.platform}
🎯 Género: ${game.genre}
⭐ Rating: ${game.rating}
📦 Stock: ${game.stock}

📖 Descripción:
${game.description}
    `.trim();
    
    alert(details);
    
    // Opción 2 (BONUS): Crear un modal HTML
    // showGameModal(game);
  });
  
  return card;
}

// =============================================================================
// BONUS: Función para mostrar modal (0.2 pts extra)
// =============================================================================
function showGameModal(game) {
  // Crear overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  // Crear contenido del modal
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  // Botón cerrar
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
  
  // Contenido
  modalContent.innerHTML = `
    <img src="${game.cover}" alt="${game.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
    <h2>${game.title}</h2>
    <p><strong>Desarrollador:</strong> ${game.developer}</p>
    <p><strong>Año:</strong> ${game.year}</p>
    <p><strong>Precio:</strong> ${game.price === 0 ? 'GRATIS' : '$' + game.price}</p>
    <p><strong>Plataforma:</strong> ${game.platform}</p>
    <p><strong>Género:</strong> ${game.genre}</p>
    <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
    <p><strong>Stock:</strong> ${game.stock > 0 ? game.stock + ' unidades' : 'Agotado'}</p>
    <br>
    <p><strong>Descripción:</strong></p>
    <p>${game.description}</p>
  `;
  
  modalContent.appendChild(closeBtn);
  overlay.appendChild(modalContent);
  document.body.appendChild(overlay);
  
  // Cerrar al hacer click fuera del modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}
*/

// =============================================================================
// CONSEJOS FINALES
// =============================================================================
/*
✅ CHECKLIST ANTES DE ENTREGAR:

□ Todos los archivos tienen tu nombre en comentarios
□ No hay errores en la consola
□ La búsqueda funciona correctamente
□ Los filtros de género funcionan
□ El selector de plataforma funciona
□ El ordenamiento funciona
□ Click izquierdo añade/quita favoritos
□ Doble click añade al carrito
□ Click derecho muestra detalles
□ El contador del carrito se actualiza
□ Los estados persisten al recargar (localStorage)
□ El código está bien indentado y limpio

💡 DEBUGGING:

Si algo no funciona:
1. Abre la consola (F12)
2. Busca errores rojos
3. Usa console.log() para ver valores de variables
4. Verifica que los nombres de clases coincidan con el CSS
5. Asegúrate de importar correctamente los módulos

📚 RECURSOS ÚTILES:

- Array.filter(): Filtra elementos de un array
- Array.find(): Encuentra un elemento específico
- Array.sort(): Ordena un array
- Array.includes(): Verifica si contiene un elemento
- String.toLowerCase(): Convierte a minúsculas
- String.includes(): Verifica si contiene un texto
- localStorage.setItem(): Guarda datos
- localStorage.getItem(): Recupera datos
- JSON.stringify(): Convierte objeto a string
- JSON.parse(): Convierte string a objeto
- element.classList.add/remove/toggle(): Maneja clases CSS
- element.dataset: Accede a atributos data-*

¡Mucha suerte! 🚀
*/