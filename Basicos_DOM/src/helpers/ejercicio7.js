import { publicaciones } from "../db/data";


function createEjercicio7() {

    const notfeching = () => {
        return publicaciones;
    };

const render = () => {
    const container = document.createElement("div");
    container.classList.add("blog-container");

    const data = notfeching();

    // 1. Crear todos los posts (pero no insertarlos aún)
    const posts = data.map((publicacion) => {
        const post = document.createElement("div");
        post.classList.add("post");

        const postTitle = document.createElement("h2");
        postTitle.classList.add("post-title");
        postTitle.textContent = publicacion.titulo;
        post.appendChild(postTitle);

        const postMeta = document.createElement("p");
        postMeta.classList.add("post-meta");
        postMeta.textContent = `${publicacion.autor} | ${publicacion.fecha}`;
        post.appendChild(postMeta);

        const postContent = document.createElement("p");
        postContent.classList.add("post-content");
        postContent.textContent = publicacion.contenido;
        post.appendChild(postContent);

        const postEtiquetas = document.createElement("div");
        postEtiquetas.classList.add("tags-container");

        const ul = document.createElement("ul");
        publicacion.etiquetas.forEach((etiqueta) => {
            const tag = document.createElement("li");
            tag.classList.add("tag");
            tag.textContent = etiqueta;
            ul.appendChild(tag);
        });

        postEtiquetas.appendChild(ul);
        post.appendChild(postEtiquetas);

        const postLikes = document.createElement("p");
        postLikes.classList.add("likes-count");
        postLikes.textContent = `Likes: ${publicacion.likes}`;
        post.appendChild(postLikes);

        // Guardamos el valor para ordenar
        post.dataset.likes = publicacion.likes;

        return post;
    });

    // 2. Ordenar los posts ANTES de insertarlos
    posts.sort((a, b) => b.dataset.likes - a.dataset.likes); // mayor → menor

    // 3. Insertarlos en orden usando insertBefore
    posts.forEach((post) => {
        container.insertBefore(post, container.lastChild);
    });

    return container;
};
    return { render };
}

export default createEjercicio7;