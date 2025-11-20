import { imagesData } from "../data/images";


/*
    {
        id: 1,
        title: 'MontaÃ±as al atardecer',
        category: 'naturaleza',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        author: 'John Doe',
        date: Date.now() - 86400000 * 1,
    },
*/

export function createImageCard(image,onImageClick,onFavouriteToggle){

    // contenedor principal

    const card = document.createElement("div");
    card.className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative";
    card.dataset.imageId=image.id;


    // imagen
    const img = document.createElement("img");
    img.src=image.url;
    img.alt=image.title;
    img .className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity";
    //img.onerror=()=>img.src="Aqui iria la url de una imagen que simbolice no disponible"

    card.appendChild(img);

    // gestionar el corazon de favorito

    // informacion de la imagen

    const infoContainer=document.createElement("div");
    infoContainer.className="p-4 bg-white";
    const title = document.createElement("h3")
    title.className="font-bold text-lg text-gray-800 mb-2"
    title.textContent=image.title
    infoContainer.appendChild(title);

    const author = document.createElement("p")
    author.className="font-semibold text-sm text-grey-600";
    author.textContent=`Realizado por: ${image.author}`;
    infoContainer.appendChild(author);

    // evento de la tarjeta

    card.onclick=()=>{
        alert(image.id); // se sustituye por imageOnClick
    }

    //introducir en card toda la informacion

    card.appendChild(infoContainer);

    // retornar el componente
    return {
        element:card,
        //aqui iran las funciones
        // isfavourite <--- es favorita la imagen
        // setfavourite <--- convertir imagen en favorita
    }

}

export function createImageGrid(images, onImageClick, onFavouriteToggle){
    // creamos un MAP privado que guarde las tarjetas

    const cards = new Map();
    const grid = document.createElement("div");
    grid.className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6";

    //crear cada tarjeta con createImageCard

    images.forEach(image => {
        const cardComponent = createImageCard(
            image,
            onImageClick,
            onFavouriteToggle
        );
        cards.set(image.id,cardComponent);
        grid.appendChild(cardComponent.element);
    });
    

    return {
        element: grid
    }

}

