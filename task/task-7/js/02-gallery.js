
import { galleryItems } from './gallery-items';

//Pobiem galerię za pomocą querySelector
//Wykorzystuję metodę .insertAdjacentHTML aby dodać string wewnątrz elementu po wszystkich dzieciach
//Tworzę funkcję przekazując jej jako parametr "item"
//Korzystam z metody .map która przyjmuje następujące parametry "preview"-mały obraz, "original"-duży obraz, "description"-opis obrazka.
//Modyfikuje podany szablon HTML
//Wukorzystuje metodę .join do łączenia elementów tablicy w string, nieznacznie zmieniając znacznik galerii
//Korzystam z biblioteki SIPLELIGHTBOX która zajmuje się opracowaniem kliknięc w obrazki,
//Która posiada takie właściwości jak otwieranie i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury


const gallery = document.querySelector('.gallery');
const markup = createItemsMarkup(galleryItems);


gallery.insertAdjacentHTML("beforeend", markup);

function createItemsMarkup(item){
    return galleryItems
    .map(({preview,original,description}) => {
        return  `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/></a></div>`;})
            .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 50,
  });