import { peliculas } from "../db/data";
import fetching from "../utils/fetching";

export default function createEjercicio3() {

    //closures
    const notfeching=()=> peliculas;

    const getStars =(rating)=>{
        const numStars=Math.floor(rating/2);    
        return '⭐'.repeat(numStars);
    }
    const renderMoviesGrid=(moviesArray)=>{

        const container=document.createElement('div');
        container.classList.add('movies-container');
        
        moviesArray.forEach(movie=>{
            const card= document.createElement('div');
            card.classList.add('movie-card');
            
            //Titulo
            const title=document.createElement('h3');
            title.classList.add('movie-title');
            title.textContent=movie.titulo;
            card.appendChild(title);
            
            //Año
            const year=document.createElement('p');
            year.classList.add('movie-year');
            year.textContent=movie.año;
            card.appendChild(year);
        
            //Rating
            const rating=document.createElement('p');
            rating.classList.add('movie-rating');
            rating.textContent='Rating: ' + `${movie.rating}/10 ` + `${getStars(movie.rating)}`;
            card.appendChild(rating);
        

            //Imagen
            container.appendChild(card);
        })
        
        return container;
    } 
    
    const render=()=>{
        const mainContainer=document.createElement('div');


        //Version sincrona
        const v1Wrapper=document.createElement('div');
        v1Wrapper.innerHTML='<h2>Versión Sincrónica</h2>';
        v1Wrapper.appendChild(renderMoviesGrid(notfeching()));
    
        mainContainer.appendChild(v1Wrapper);

        //Version asincrona
        const v2Wrapper=document.createElement('div');
        v2Wrapper.innerHTML='<h2>Versión Asincrónica</h2>';
        

        fetching('peliculas')
        .then(data=>{
            v2Wrapper.appendChild(renderMoviesGrid(data));
        })
        .catch((err)=>{
            console.error('Error fetching movies:', err);
            throw err;
        })        
        mainContainer.appendChild(v2Wrapper);
        return mainContainer;
    }

    return {
        render
    }
}