
const app = () => {
    //Primera funcion Closure
    const crearClosure = () => {
        let mensajeSecreto ="Yo soy tu closure";
        return () => {
            console.log("Mensaje",mensajeSecreto);
        }
    }

    const miClosure = crearClosure();
    miClosure();

    //-------------scope lexico-------------
    let nivelGlobal="Soy global 🌍"
    const fucionExterna=()=>{
        let nivelExterno="Soy del scope externo"
        const funcionInterna=()=>{
            let nivelInterno="Soy del scope interno"
            //console.log(nivelGlobal,nivelExterno,nivelInterno)
            console.log("Accediendo a:",nivelGlobal)
            console.log("Accediendo a:",nivelExterno)
            console.log("Accediendo a:",nivelInterno)
        }
        funcionInterna();
    }
    fucionExterna();

    //ejercicio Encapsulacion
    //**
    // *objetoPublico saldo, retirarDinero(cantidad) <----retirar ese dinero del saldo
    // 
    //Crear un objeto publico     

    const objetoPublico ={
        saldo:1000,
        retirarDinero:function(cantidad){
            this.saldo-=cantidad;
        }
    }

    objetoPublico.retirarDinero(100);
    console.log("Saldo: ",objetoPublico.saldo);


    //------------------CUENTA BANCARIA------------------
    const crearCuentaBancaria =(saldoInicial=0)=>{
        //Saldo ha de ser private
        let saldo=saldoInicial ?? 0;

        return {
            obtenerSaldo: ()=>saldo,
            depositar:(cantidad=0)=>{
                if(cantidad>0){
                    saldo +=cantidad
                    console.log(`Cantidad ${cantidad} añadidad. El nuevo saldo es: ${saldo}`)
                    return true
                }
                //Si es negativa no hago nada 
            },
            retirarDinero:(cantidad=0) =>{
                if (cantidad<=saldo){
                    saldo-=cantidad
                    console.log("Se ha retirado correctamente la cantidad")
                    console.log(`El saldo actual es ${saldo}`)
                    return true
                }else{
                    console.log("No se ha podido retirar el dinero, la cantidad no se puede ser mayor al saldo en la cuenta")
                    return false
                }
                // Si la cantidad es mayor al saldo en la cuenta no se hace nada 
            }
        }
    }

    //Primera Cuenta 
    const miCuenta1=crearCuentaBancaria(1000);
    miCuenta1.depositar(100)
    console.log( "Saldo de mi cuenta 1:",miCuenta1.obtenerSaldo())
    miCuenta1.retirarDinero(50)
    const miCuenta2=crearCuentaBancaria(100);
    console.log(miCuenta2.obtenerSaldo());

    
    //ejercicio Crear un Contador que pueda incrementar,decrementar , resetear y obtener el valor del Contador
    // Crear dos contadores uno que empiece en 10 y vaya hasta el 0 y otro que empiece en 0 y vaya hasta el 10 
    //ejemplicar utilizando un temporizador de un segundo como uno sube y otro baja utilizando los metoodos del objeto



    const crearContador =(inicio=0)=>{
        let contadorPrincio=inicio
        return {
            incrementar:(cantidad=1)=>{
                contadorPrincio+=cantidad
                return contadorPrincio
            },
            decrementar:(cantidad=1)=>{
                contadorPrincio-=cantidad
                return contadorPrincio
            },
            reiniciar:()=> {
                contadorPrincio = inicio
            },
            valorContador:() => contadorPrincio
        }
    }

    // setInterval(funcion,1000) <--- cada segundo
    // clearInterval(id)
    const contador1=crearContador(0)
    const contador2=crearContador(10)
    const intervalo1=setInterval(()=>{
        if(contador1.incrementar()<=10){
            console.log(contador1.valorContador())
        }
        clearInterval(intervalo1)
        console.log(contador1.valorContador())
    },1000)
}

export default app
