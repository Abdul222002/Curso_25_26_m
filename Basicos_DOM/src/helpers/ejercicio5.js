import { ubicaciones } from "../db/data";
import fetching from "../utils/fetching";


export function createEjercicio5() {


    const notfeching = () => {
        return ubicaciones;
    };

    const renderBooking=(arrayUbicaciones)=>{
        const container =document.createElement('div');
        
        const form =document.createElement('div');
        const divFormGroup=document.createElement('div');
        const divFormRow=document.createElement('div');

        divFormGroup.classList.add('form-group');
        divFormRow.classList.add('form-row');

        form.appendChild(divFormGroup);
        form.appendChild(divFormRow);


        //Formulario Ubicaciones
        const formUbicaciones=document.createElement('form');
        const labelUbicacion=document.createElement('label');
        labelUbicacion.textContent="Selecciona una ubicación:";
        labelUbicacion.setAttribute('for','ubicacion-select');
        formUbicaciones.appendChild(labelUbicacion);

        const selectUbicacion=document.createElement('select');
        selectUbicacion.setAttribute('id','ubicacion-select');
        arrayUbicaciones.forEach(ubicacion=>{
            const option=document.createElement('option');
            option.value=ubicacion.id;
            option.textContent=ubicacion.nombre;
            selectUbicacion.appendChild(option);
        });
        formUbicaciones.appendChild(selectUbicacion);
        divFormGroup.appendChild(formUbicaciones);

        //Formulario Fecha check-in y check-out

        const formFechas=document.createElement('form');
        //Check-in
        const labelCheckIn=document.createElement('label');
        labelCheckIn.textContent="Check-in:";
        labelCheckIn.setAttribute('for','checkin-date');
        formFechas.appendChild(labelCheckIn);

        const inputCheckIn=document.createElement('input');
        inputCheckIn.setAttribute('type','date');
        inputCheckIn.setAttribute('id','checkin-date');
        formFechas.appendChild(inputCheckIn);

        //Check-out
        const labelCheckOut=document.createElement('label');
        labelCheckOut.textContent="Check-out:";
        labelCheckOut.setAttribute('for','checkout-date');
        formFechas.appendChild(labelCheckOut);

        const inputCheckOut=document.createElement('input');
        inputCheckOut.setAttribute('type','date');
        inputCheckOut.setAttribute('id','checkout-date');
        formFechas.appendChild(inputCheckOut);

        divFormRow.appendChild(formFechas);


        container.appendChild(form);
        return container;
    }



    const render = () => {
        const data = notfeching();
        const mainContainer = document.createElement("div");
        
        mainContainer.innerHTML = `
            <h2>Ejercicio 5: Sistema de reservas</h2>
        `;

        // Version sincrona
        const v1Wrapper=document.createElement('div');
        v1Wrapper.innerHTML='<h3>Versión Sincrónica</h3>';
        v1Wrapper.appendChild(renderBooking(data));
        mainContainer.appendChild(v1Wrapper);

        // Version asincrona
        const v2Wrapper=document.createElement('div');
        v2Wrapper.innerHTML='<h3>Versión Asincrónica</h3>';
        fetching('ubicaciones')
        .then(data=>{
            v2Wrapper.appendChild(renderBooking(data));
        })
        .catch((err)=>{
            console.error('Error fetching movies:', err);
            throw err;  
        })        
        mainContainer.appendChild(v2Wrapper);

        return mainContainer;
    };

    return { render };
}

export default createEjercicio5;