import createGalleryApp from "./components/galleryApp"


export default function createApp() {
    
    const galleryApp = createGalleryApp()

    return galleryApp.element;


    
}
