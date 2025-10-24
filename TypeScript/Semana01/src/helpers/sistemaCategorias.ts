 //Vamos a crear un sistema de categorias:
 //Crear un map llamado catalogo donde cada categoria tiene un set de productos.Crear las siguientes funciones:
 // agregar producto si el producto ha sido agregado
 // y mostrar catalogo completo.
 //Adicionalmente crear una funcion llamada buscarProducto que le pase un string, el nombre del producto y me diga en que categoria esta un producto determinado.
 //!!! Cuidado con el get que devuelve undefined si no existe la clave.!!!

const catalogo=new Map<string, Set<string>>();

// Funcion para agregar un producto a una categoria
const addProduct=(category:string,product:string):void=>{
    if(!catalogo.has(category)){
        //Lo creamos nosotros
        catalogo.set(category,new Set<string>());
    }
    catalogo.get(category)?.add(product);

};

addProduct('Electrónica','Televisor');
addProduct('Electrónica','Radio');
addProduct('Hogar','Sofá');
addProduct('Hogar','Mesa');
addProduct('Electrónica','Teléfono');



// Funcion para mostrar el catalogo completo
const showCatalog=():void=>{
    console.log("------------------catalogo de productos------------------");
    for(const [category,products] of catalogo){
        console.log(`✔ Categoría: ${category} ---Numero de productos: ${products.size}`);
        products.forEach(producto=>{
            console.log('   🔸',producto);
        })
    }
}
showCatalog();


function searchProduct(productName:string):string[]{
    
    const categoriasEncontradas:string[]=[];
    for(const [category,products] of catalogo){
        if(products.has(productName)){
            categoriasEncontradas.push(category);
        }
    }
    if(categoriasEncontradas.length>0){
        console.log(`El producto "${productName}" se encuentra en las categorías: ${categoriasEncontradas.join(", ")}`);
    }else{
        console.log(`El producto "${productName}" no se encontró en ninguna categoría.`);
    }
    return categoriasEncontradas
}


console.log(`Las categorias del producto teclado son : ${searchProduct("Teclado")}`);
