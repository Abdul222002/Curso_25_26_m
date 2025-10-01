const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 5, categoria: 'Tecnología' },
    { id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: 'Ropa' },
    { id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: 'Tecnología' },
    { id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura' },
    { id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnología' },
    { id: 6, nombre: 'Pantalón', precio: 60, stock: 5, categoria: 'Ropa' },
];



// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
const productosVacios = productos
  .filter(producto => producto.stock === 0)
  .map(producto => producto.nombre);

console.log(`El apartado A es --> ${productosVacios}`);

// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos.

const sumaProductos=productos
    .map(producto=>producto.precio*producto.stock)
    .reduce((acc,precio)=> acc+precio,0);

console.log(`El apartado B es --> ${sumaProductos}`);

// 3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500

const productosTecnologia=productos
    .filter(producto=> producto.categoria===`Tecnología` && producto.precio >500)
    .map(producto=>producto.nombre);

console.log(`El apartado C es --> ${productosTecnologia}`);

// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría 'Ropa'.
const productosRopaConDescuento = productos
    .filter(producto => producto.categoria === 'Ropa')
    .map(producto => ({ ...producto, precio: producto.precio * 0.9 }))
    .map(producto => producto.nombre);

console.log(`El apartado D es --> ${productosRopaConDescuento}`);
