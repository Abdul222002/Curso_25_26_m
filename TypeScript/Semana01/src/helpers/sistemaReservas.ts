//Crear un sistema de reservas de un restaurante:
// Un MAP con clave la fecha de la reserva formato YYYY-MM-DD
// y el valor es un set con los nombres(DNI) de los clientes que han reservado a esa dia.

//Funciones:
// agregarReserva
// cancelarReserva
// mostrarReservas
// estadisiticas Reservas por dias, reservas totales, media de reservas

export const ejercicioSistemaReservas=()=>{
const sistemaReservas=new Map<string,Set<string>>();

// Funcion para agregar una reserva

const agregarReserva=(fecha:Date,nombre:string):void=>{
    const fechaKey=fecha.toISOString().split("T")[0];
    if(!sistemaReservas.has(fechaKey)){
        sistemaReservas.set(fechaKey,new Set<string>());
    }
    sistemaReservas.get(fechaKey)?.add(nombre);
}

// Funcion para cancelar una reserva
const cancelarReserva=(fecha:Date,nombre:string):void=>{
    const fechaKey=fecha.toISOString().split("T")[0];
    if(sistemaReservas.has(fechaKey)){
        sistemaReservas.get(fechaKey)?.delete(nombre);
        console.log(`❌Se ha borrado correctamente la reserva el dia ${fechaKey} por parte de ${nombre}`)
    }
}

// Funcion para mostrar todas las reservas
const mostrarReservas=():void=>{
    console.log("------- Reservas del Restaurante -------");
    for(const [fecha,clientes] of sistemaReservas){
        console.log(`📅 El dia ${fecha} tiene --- ${clientes.size} reservas`);
        clientes.forEach(cliente=>{
            console.log('   🔸',cliente);
        });
    }
}


// Funcion para obtener estadisticas de reservas
const estadisiticasReservas=():void=>{
    let totalReservas=0;
    const reservasPorCliente=new Map<string,number>();
    console.log("------- Estadísticas de Reservas -------");
    for(const [fecha,clientes] of sistemaReservas){
        totalReservas+=clientes.size;
        console.log(`📅 El dia ${fecha} tiene --- ${clientes.size} reservas`);
        //Cuantas reservas ha hecho cada cliente
        clientes.forEach(cliente=>{
            reservasPorCliente.set(cliente,(reservasPorCliente.get(cliente) || 0) + 1);
        });
    }
    const diasConReservas=sistemaReservas.size;
    const mediaReservas=diasConReservas>0 ? totalReservas/diasConReservas : 0;
    console.log(`📊 Total de reservas: ${totalReservas}`);
    console.log(`📊 Media de reservas por día: ${mediaReservas.toFixed(2)}`);
    for (const [cliente,cantidad] of reservasPorCliente){
        console.log(`   🔸 El cliente ${cliente} ha hecho ${cantidad} reservas`);
    }       
    }

// Pruebas

  console.log("\n===== 🔍 PRUEBAS DEL SISTEMA DE RESERVAS =====");

  // Fechas de ejemplo
  const hoy = new Date("2025-10-24");
  const manana = new Date("2025-10-25");
  const pasado = new Date("2025-10-26");

  // Agregar reservas
  agregarReserva(hoy, "Manoloito");
  agregarReserva(hoy, "pepito");
  agregarReserva(manana, "Manoloito");
  agregarReserva(manana, "carmen");
  agregarReserva(pasado, "riquelme");

  console.log("\n✅ Reservas agregadas correctamente.");
  mostrarReservas();

  // Cancelar una reserva
  cancelarReserva(manana, "carmen");
  mostrarReservas();

  // Mostrar estadísticas
  console.log("\n📈 Mostrando estadísticas:");
  estadisiticasReservas();
}

 