export default function createImageModal(image) {
    const element = document.createElement('div')
    element.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    element.style.display = "none";

    const modalContent = document.createElement('div')
    modalContent.className = "bg-white p-6 rounded-lg max-w-lg w-full relative";
    element.appendChild(modalContent);

    const modalTitle = document.createElement('h2')
    modalTitle.className = "text-2xl font-bold mb-4";
    modalTitle.textContent = image.title;
    modalContent.appendChild(modalTitle);

    const modalImage = document.createElement('img')
    modalImage.src = image.url;
    modalImage.alt = image.title;
    modalImage.className = "w-full rounded-lg";
    modalContent.appendChild(modalImage);

    const closeModal = document.createElement('button')
    closeModal.className = "absolute top-4 right-4 text-gray-600 hover:text-gray-800";
    closeModal.textContent = "X";
    modalContent.appendChild(closeModal);

    closeModal.addEventListener("click", () => {
        element.style.display = "none";
    });

    // 👉 Añadir al DOM
    document.body.appendChild(element);

    return {
        element: element,
        open: () => element.style.display = "flex"
    };
}
