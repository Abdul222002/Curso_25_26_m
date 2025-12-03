import { proyectos } from "../db/data";



export function createEjercicio10() {

    const notfeching = () => proyectos;
    
    const render = () => {
        const data = notfeching();
        const container = document.createElement("div");
        container.classList.add("portfolio-container");

        container.innerHTML = `
            <h2>Ejercicio 10: Lista de proyectos</h2>
        `;

        const title = document.createElement("h1");
        title.classList.add("portfolio-title");
        title.textContent = "💼Portfolio de proyectos";
        container.appendChild(title);


        const tecnologias= new Set();
        tecnologias.add("Todos");  
        data.forEach(proyecto=>{
            proyecto.tecnologias.forEach(
                tecnologia=>tecnologias.add(tecnologia)
            );
        });

        // Crear filtro
        const filtroDiv=document.createElement("div");
        filtroDiv.classList.add("filter-buttons");
        tecnologias.forEach(tecnologia=>{
            const button=document.createElement("button");
            button.classList.add("filter-btn");
            button.textContent=tecnologia;
            filtroDiv.appendChild(button);
        });
        container.appendChild(filtroDiv);

        //Crear Contador
        const contador=document.createElement("div");
        contador.classList.add("projects-count");
        container.appendChild(contador);

        //Grid de proyectos 
        const gridProyectos=document.createElement("div");
        gridProyectos.classList.add("projects-grid");
        container.appendChild(gridProyectos);

        const renderProjects=(proyectosAFiltrar)=>{
            gridProyectos.innerHTML="";
            contador.innerHTML="";
            contador.textContent=`Proyectos: ${proyectosAFiltrar.length}`;


            proyectosAFiltrar.forEach(proyecto=>{
                const card= document.createElement("div");
                card.classList.add("project-card");

                if(proyecto.destacado){
                    card.innerHTML=
                    `
                    <span class="featured-badge">⭐</span>
                    `
                    ;
                }

                //Creamos la imagen
                const img=document.createElement("img");
                img.src=proyecto.imagen;
                img.alt=proyecto.nombre;
                card.appendChild(img);



                //Creamos el nombre
                const nombre=document.createElement("h3");
                nombre.classList.add("project-title");
                nombre.textContent=proyecto.nombre;
                card.appendChild(nombre);


                //Creamos la descripción
                const descripcion=document.createElement("p");
                descripcion.classList.add("project-description");
                descripcion.textContent=proyecto.descripcion;
                card.appendChild(descripcion);

                //Tecnologías
                const techList=document.createElement("div");
                techList.classList.add("tech-stack");
                proyecto.tecnologias.forEach(tech=>{
                    const techSpan=document.createElement("span");
                    techSpan.classList.add("tech-badge");
                    techSpan.textContent=tech; 
                    techList.appendChild(techSpan);
                });
                card.appendChild(techList);
                gridProyectos.appendChild(card);
            });
        }

        filtroDiv.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON"){
                const tecnologiaSeleccionada=e.target.textContent;
                if(tecnologiaSeleccionada==="Todos"){
                    renderProjects(data);
                }else{
                    const proyectosFiltrados=data.filter(proyecto=>
                        proyecto.tecnologias.includes(tecnologiaSeleccionada)
                    );
                    renderProjects(proyectosFiltrados);
                }

            }
        });
        return container
    }

    return {
        render
    };
}

