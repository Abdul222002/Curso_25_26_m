// db.js

// Importamos 'fs' para comprobar y crear carpetas si hacen falta
import fs from 'fs';

// Importamos mejor-sqlite3 (módulo CommonJS, por eso usamos default import)
import Database from 'better-sqlite3';

// Ruta donde queremos que se guarde la base de datos
const folder = 'src/database';

// 1️⃣ Si la carpeta no existe, la creamos
// -------------------------------------------------------------
// fs.existsSync(folder): revisa si existe la carpeta.
// fs.mkdirSync(folder, { recursive: true }): la crea si no existe.
// El "recursive: true" permite crear varias carpetas anidadas.
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder, { recursive: true });
  console.log(`Carpeta creada: ${folder}`);
}

// 2️⃣ Creamos (o abrimos si ya existe) el archivo carrito.db
// -------------------------------------------------------------
// new Database('ruta'): si el archivo existe, lo abre.
// Si no existe, SQLite lo crea automáticamente.
const db = new Database(`${folder}/carrito.db`);

// 3️⃣ Creamos la tabla del carrito si no existe
// -------------------------------------------------------------
// CREATE TABLE IF NOT EXISTS evita errores si la tabla ya está creada.
// id: clave primaria autoincremental.
// nombre: nombre del producto.
// precio: precio unitario del producto.
// cantidad: cuántas unidades hay en el carrito.

db.prepare(`
  CREATE TABLE IF NOT EXISTS carrito (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    cantidad INTEGER NOT NULL
  );
`).run();

console.log("Tabla 'carrito' creada correctamente.");

// Crear tabla producto si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS producto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL
  );
`).run();

console.log("Tabla 'producto' creada correctamente.");


db.prepare(`
  INSERT INTO producto (nombre, descripcion, precio, stock)
  VALUES (?, ?, ?, ?)
`).run("Zapatillas deportivas", "Zapatillas cómodas para correr", 59.99, 10);


console.log("Base de datos creada y tabla 'carrito' lista.");

// 4️⃣ Exportamos la instancia 'db' para usarla en otros archivos
// -------------------------------------------------------------
export default db;
