import { createImageCard, createImageGrid } from "./imageCard";
import { imagesData } from "../data/images";
import createImageModal from "./ImageModal";


export default function createGalleryApp() {
    
    
    // Contenedor Principal

    const container = document.createElement("div");
    container.className="min-h-screen bg-linear-to-br from-purple-700 via-white to-pink-900";
  

    // ------------------header --------------------

    const header = document.createElement("header");;
    header.className="bg-white shadow-lg sticky top-0 z-40";

    const headerContentDiv = document.createElement("div");
    headerContentDiv.className="max-w-7xl mx-auto px-6 py-6"
    const headerTitle = document.createElement("h1");
    headerTitle.className="text-3xl font-bold text-purple-800 mb-2"
    headerTitle.textContent="🎨 Galeria de Imagenes";

    const headerSubtitle = document.createElement("p")
    headerSubtitle.className="text-gray-600"
    headerSubtitle.textContent="Aprende closures, funciones fabrica y manipulacion del DOM"

    headerContentDiv.appendChild(headerTitle);
    headerContentDiv.appendChild(headerSubtitle);
    header.appendChild(headerContentDiv);



    // -----------------main-----------------------


    const main = document.createElement("main")
    main.className="maw-w-7xl mx-auto px-6 py-8";


    // contador de favoritos

    const counterComponent = document.createElement("h2");
    counterComponent.textContent="<---- aquí ira el componente FavouritesCounter ---> ";

    // modal de imagen

    const imageModal = document.createElement("h2")
    imageModal.textContent="<----- aqui ira el componente ImageModal --->";

    // grid de imagenes

    const gridComponent=document.createElement("h2")
    gridComponent.textContent = "<---- aqui ira el componente grid  con las imagenes --->"
    const imageComponent = createImageGrid(imagesData);

    main.appendChild(imageComponent.element);


    main.appendChild(counterComponent);
    main.appendChild(imageModal);
    main.appendChild(gridComponent);


    // -----------------footer--------------------
    const footer = document.createElement("footer")
    footer.className="bg-gray-900 text-white py-8 mt-15";

    const footerContentDiv = document.createElement("div");
    footerContentDiv.className="max-w-7xl mx-auto px-6 text center"

    const footerText = document.createElement("p");
    footerText.className="text-gray-400";
    footerText.innerHTML=`Ejercicio DOM by Guillermo Bazan Diaz</br> <a href='https://github.com/Guille2701' target='_blank'>https://github.com/Guille2701</a>`


    footerContentDiv.appendChild(footerText);
    footer.appendChild(footerContentDiv);














    // Añadimos todo al container
    container.appendChild(header);
    container.append(main)
    container.append(footer);

    return {
        element : container,
    }
}
