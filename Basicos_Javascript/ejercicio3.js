let cuentas = [];

/**
 * Crea una nueva cuenta bancaria.
 * @param {Text} titular - Nombre del titular de la cuenta.
 * @param {Number} saldo - Saldo inicial de la cuenta.
 * @returns {Object} - Objeto que representa la cuenta creada.
 */
function Crearcuenta(titular, saldo){
    const numeroCuenta = Math.floor(1000000000 + Math.random() * 9000000000);
    console.log(`Cuenta creada a nombre de ${titular} con un saldo inicial de ${saldo} euros y el número de cuenta IB25${numeroCuenta}.`);
    const nuevaCuenta = {
        titular,
        saldo,
        numeroCuenta: `IB25${numeroCuenta}`
    };

    cuentas.push(nuevaCuenta);
    return nuevaCuenta;
}

/**
 * - Ingresa dinero en una cuenta bancaria.
 * @param {Object} cuenta - Objeto que representa la cuenta bancaria.
 * @param {Number} cantidad - Cantidad de dinero a ingresar.
 * @returns {Object} - Objeto que representa la cuenta actualizada.
 */
function IngresarDinero(cuenta, cantidad){
    if(cantidad > 0){
        cuenta.saldo += cantidad;   
    }else{
        console.log("La cantidad a ingresar debe ser positiva.");
    }
    return cuenta;
}

/**
 * Retira dinero de una cuenta bancaria.
 * @param {Object} cuenta - Objeto que representa la cuenta bancaria.
 * @param {Number} cantidadRetirar - Cantidad de dinero a retirar.
 * @returns {Object} - Objeto que representa la cuenta actualizada.
 */
function RetirarDinero(cuenta, cantidadRetirar){
    if(cantidadRetirar > 0 && cuenta.saldo - cantidadRetirar >= 0){
        cuenta.saldo -= cantidadRetirar;
    }else{
        console.log("No se puede retirar esa cantidad, saldo insuficiente.");
    }
    return cuenta;
}

/** Consulta el saldo de una cuenta bancaria.
 * @param {Object} cuenta - Objeto que representa la cuenta bancaria.
 * @returns {Number} - Saldo actual de la cuenta.
 */
function ConsultarSaldo(cuenta){
    return cuenta.saldo;
}

/**
 * Transfiere dinero entre dos cuentas bancarias.
 * @param {Object} cuentaOrigen - Objeto que representa la cuenta de origen.
 * @param {Object} cuentaDestino - Objeto que representa la cuenta de destino.
 * @param {Number} cantidadTransferir - Cantidad de dinero a transferir.
 * @returns {Object} - Objeto que representa las cuentas actualizadas.
 */
function TransferirDinero(cuentaOrigen, cuentaDestino, cantidadTransferir){
    if(cantidadTransferir > 0 && cuentaOrigen.saldo - cantidadTransferir >= 0){
        cuentaOrigen.saldo -= cantidadTransferir;
        cuentaDestino.saldo += cantidadTransferir;
    }else{
        console.log("No se puede transferir esa cantidad, saldo insuficiente.");
    }
    return {cuentaOrigen, cuentaDestino};
}

/** Busca una cuenta bancaria por el nombre del titular.
 * @param {Text} titular - Nombre del titular de la cuenta.
 * @returns {Object|Text} - Objeto que representa la cuenta encontrada o un mensaje si no se encuentra.
 */
function BuscarCuentaPorTitular(titular){
    let cuentaEncontrada = null;
    for(const cuenta of cuentas){
        if(cuenta.titular === titular){
            cuentaEncontrada = cuenta;
        }
    }
    if(cuentaEncontrada === null){
        return "No se ha encontrado ninguna cuenta para el titular: " + titular;
    }
    return cuentaEncontrada;
}

// Testeo de funciones
/** Función de prueba para las funcionalidades del banco.
 */
function test(){
    const cuentaAna = Crearcuenta("Ana", 500);
    const cuentaLuis = Crearcuenta("Luis", 300);
    const cuentaMaria = Crearcuenta("Maria", 800);
    console.log(IngresarDinero(cuentaAna, 200));
    console.log(RetirarDinero(cuentaLuis, 100));
    console.log(ConsultarSaldo(cuentaMaria));
    console.log(TransferirDinero(cuentaAna, cuentaLuis, 150));
    console.log(BuscarCuentaPorTitular("Maria"));
}

test();