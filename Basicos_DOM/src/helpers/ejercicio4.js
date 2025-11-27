import { alojamientos } from "../db/data";
import fetching from "../utils/fetching";



export default function createEjercicio4() {
    //no fetching
    const notfeching=()=> alojamientos;
    //renderTable
    const renderTable=(alojamientosArray)=>{
        const container =document.createElement('div');
        container.classList.add('table-container');

        const table=document.createElement('table');                
        const thead =document.createElement('thead');
        const trHeader= document.createElement('tr');

        //Headers
        ['Nombre','Ubicación','Precio','Rating'].forEach(headerText=>{
            const th=document.createElement('th');
            th.textContent=headerText;
            trHeader.appendChild(th);
        });
        thead.appendChild(trHeader);
        table.appendChild(thead);
        //Body
        const tbody=document.createElement('tbody');
        alojamientosArray.forEach(alojamiento=>{
            const tr =document.createElement('tr');
            //Nombre
            const tdNombre=document.createElement('td');
            tdNombre.textContent=alojamiento.nombre;
            tr.appendChild(tdNombre);

            //Ubicacion 
            const tdUbicacion=document.createElement('td');
            tdUbicacion.textContent=alojamiento.ubicacion;
            tr.appendChild(tdUbicacion);

            //Precio 
            const tdPrecio=document.createElement('td');
            tdPrecio.classList.add('price');
            tdPrecio.textContent=alojamiento.precio;
            tr.appendChild(tdPrecio);

            //Rating
            const tdRating=document.createElement('td');
            tdRating.classList.add('rating');
            tdRating.textContent="⭐".repeat(Math.floor(alojamiento.rating));
            tr.appendChild(tdRating);
            
            
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);


        //Ahora añadimos la table al contenedor
        container.appendChild(table);
        return container;
    };
    //render function
    const render=()=>{
        const mainContainer=document.createElement('div');

        //Version sincrona
        const v1Wrapper=document.createElement('div');
        v1Wrapper.innerHTML='<h2>Versión Sincrónica</h2>';
        v1Wrapper.appendChild(renderTable(notfeching()));
        mainContainer.appendChild(v1Wrapper);


        //Version asincrona
        const v2Wrapper=document.createElement('div');
        v2Wrapper.innerHTML='<h2>Versión Asincrónica</h2>';
        fetching('alojamientos')
        .then(data=>{
            v2Wrapper.appendChild(renderTable(data));
        })
        .catch((err)=>{
            console.error('Error fetching movies:', err);
            throw err;
        })        
        mainContainer.appendChild(v2Wrapper);
        return mainContainer;
    };

    
    return{
        render
        }
};  

