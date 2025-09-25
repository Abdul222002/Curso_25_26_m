/*

#Ejercicio 5
- Dado un array de nombres crear una funcion llamada mayusculas que devuelva un nuevo array con los nombres en mayusculas.
- Crear un funcion llamada precios con iva que al pasarle un array de precios devuelva un nuevo array con los precios mas el 21% de iva.
- Crear una funcion llamada impares cuadrado que le pase un array de numeros y me devuelva solo los numeros impares elevados al cuadrado.
- Crear una funcion llamada normalizar email que le pase una array de email que pueden llevar espacion al principio y al final y que me los divuelva sin epacios al principio y al final.
- Crear una funcion llamada filtrar logintud que le pase como parametro un array de nombres,un tammaño y que me duevuelva un array con los nommbres cuya longitud sea mayor o igual que el tamaño pasado por parametro.
- Crear una funcion llamada normalizar nombres propias que le pase un array de nombres y me los devuelva con la letra capital en mayuscula, el la primera letra del nombre.
*/

//------------------Apartado 1------------------///

/**
 * Convierte un array de nombres a mayúsculas.
 * @param {Array} nombres - Array de nombres.
 * @returns {Array} - Nuevo array con los nombres en mayúsculas.
 */
function mayusculas(nombres=[]){
    return nombres.map(nombre=>nombre.toUpperCase());
}

console.log(mayusculas(["ana","juan","pedro"]));

//------------------Apartado 2------------------///

/**
 * Aplica el IVA del 21% a un array de precios.
 * @param {Array} precios - Array de precios.
 * @returns {Array} - Nuevo array con los precios más el IVA.
 */
function preciosConIva(precios=[]){
    return precios.map(precio=>precio*1.21);
}

console.log(preciosConIva([100, 200, 300]));

//------------------Apartado 3------------------///
/**
 * Devuelve un nuevo array con los números impares elevados al cuadrado.
 * @param {Array} numeros - Array de números.
 * @returns {Array} - Nuevo array con los números impares al cuadrado.
 */
function imparesCuadrado(numeros=[]){
    return numeros.filter(num=>num%2!==0).map(num=>num*num);
}

console.log(imparesCuadrado([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//------------------Apartado 4------------------///z

/**
 * Normaliza un array de emails eliminando espacios al principio y al final.
 * @param {Array} emails - Array de emails.
 * @returns {Array} - Nuevo array con los emails normalizados.
 */
function normalizarEmail(emails=[]){
    return emails.map(email=>email.trim());
}

console.log(normalizarEmail(["  ejemplo1@gmail.com  ", "  ejemplo2@gmail.com  ", "  ejemplo3@gmail.com  "]));

//------------------Apartado 5------------------///

/**
 * Filtra un array de nombres por longitud.
 * @param {Array} nombres - Array de nombres.
 * @param {number} longitud - Longitud mínima.
 * @returns {Array} - Nuevo array con los nombres filtrados.
 */
function filtrarLongitud(nombres=[], longitud=0){
    return nombres.filter(nombre=>nombre.length>=longitud);
}

console.log(filtrarLongitud(["Ana", "Juan", "Pedro", "Maria"], 5));

//------------------Apartado 6------------------///

/**
 * Normaliza un array de nombres capitalizando la primera letra.
 * @param {Array} nombres - Array de nombres.
 * @returns {Array} - Nuevo array con los nombres normalizados.
 */
function normalizarNombresPropios(nombres=[]){
    const nombresNormalizados = nombres.map(nombre=>{
        if (nombre.indexOf(" ") === -1) {
            return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
        } else {
            const partes = nombre.split(" ");
            for (let i = 0; i < partes.length; i++) {
               partes[i] = partes[i].charAt(0).toUpperCase() + partes[i].slice(1).toLowerCase();
            }
            return partes.join(" ");
        }
    });
    return nombresNormalizados;
}

console.log(normalizarNombresPropios(["ana maria", "JUAN", "pEdRo"]));