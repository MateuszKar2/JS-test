import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simpleLightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const markup = createItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforend", markup);

function createItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></div>`;})
        .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionDate: 'alt',
    captionDelay: 50,
});
