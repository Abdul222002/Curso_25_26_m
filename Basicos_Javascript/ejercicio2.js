//Crear un juego de un dado que utilizando una funcion llamada tirar dado permita tirar un dado de 6 caras de 1 a 6 .
//Ademas crear una funcion llamada simular que le pase por parametro un numero de tiradas y que me diga que numero ha salido mas veces.

const numDados=[];
const contadores=[0,0,0,0,0,0];

/**
 * Tira un dado de 6 caras y devuelve el resultado.
 * @returns {number} - Un número aleatorio entre 1 y 6.
 */
function tirarDado(){
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * Simula el lanzamiento de un dado varias veces.
 * @param {*} tiradas 
 */
function simular(tiradas=1){
    for(let i=0; i<tiradas; i++){
        numDados.push(tirarDado());
    }
    for (let i = 0; i < numDados.length; i++) {
        switch (numDados[i]) {
            case 1:
                contadores[0]++;
                break;
            case 2:
                contadores[1]++;
                break;
            case 3:
                contadores[2]++;
                break;
            case 4:
                contadores[3]++;
                break;
            case 5:
                contadores[4]++;
                break;
            case 6:
                contadores[5]++;
                break;
        }
    }
    numMax=Math.max(...contadores);
    console.log(`El numero que mas ha salido es el ${contadores.indexOf(numMax)+1} con ${numMax} veces`);
}

simular(10);
