//Crear un juego de un dado que utilizando una funcion llamada tirar dado permita tirar un dado de 6 caras de 1 a 6 .
//Ademas crear una funcion llamada simular que le pase por parametro un numero de tiradas y que me diga que numero ha salido mas veces.

const numDados=[];
const contadores=[];

function tirarDado(){
    let num=Math.random()*6+1;
    return Math.floor(num);;
}

function simular(tiradas=1){
    for(let i=0;i<tiradas;i++){
        numDados.push(tirarDado());
    }
    for(let i=1;i<numDados.length;i++){
        let contador=0;
        for(let j=0;j<numDados.length;j++){
            if(numDados[i]===numDados[j]){
                const contadores={
                    numero:numDados[i],veces:contador++
                };
            }
        }
        console.log(Math.max(contadores.veces));
    }
}



simular(10);
console.log(numDados);

console.log(tirarDado());