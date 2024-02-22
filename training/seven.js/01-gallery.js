import { galleryItems } from "./gallery-items";

//pobieram galerię za pomocą querySelector

const gallery = document.querySelector('.gallery');

//wykorzystuje metodę map celem otrzymania przekształconej kopii tablicy
//Parametrami metody map. są: "preview"-mały obraz, "original"-duży obraz, "description"-opis obrazka.

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></div>`;})
        .join("");

//Implementuje gotowy szablon gotowych tagów HTML/CSS wprowadzając zmienne
//Łącze elementy tablicy w string za pomocą metody .join

gallery.insertAdjacentHTML("beforend", markup);

//Za pomocą metody .insertAdjacentHTML("beforeend") dodaje ciąg znaków wewnątrz elementu po wszystkich dzieciach

gallery.addEventListener("click", selectGalleryItem)

//Stosuje detektor zdarzeń(nazwę zdarzenia/ f. wywołania zwrotnego


//Funkcja wywołania zwrotnego(z pierwszym argumentem-"event")
//Kasuje domyślne działanie przeglądarki za pomocą metody dla eventu tj.preventDefault();


function selectGalleryItem(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG'){
        return
    }


//Stosuje warunek "if", i "event.target"
//Przy pomocy .nodeName sprawdzam typ elementu



//Wykorzystanie biblioteki "BASICLIGHTBOX" 
//Gdzie istnieje programowa metoda na zamknięcie okna modalnego
//Przypisuje swojej instancji(basicLightbox) zmienną

const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,

     {
         onShow: () => {
             window.addEventListener('keydown', onKeydownEsc);
         },
         onClose: () => {
             window.removeEventListener('keydown', onKeydownEsc);
         },
     },

//Korzystam z "dataset"- jest to obiekt, którego kolejne właśćiwości są budowane na bazie niestandardowych atrybutów
//Opiera się na prametrach- widoczny i zamknięty + modyfikuje zawartość(basicLightbox)
//Zamknięcie okna modalnego z klawiatury przycisk "Escape"

);

const onKeydownEsc = e => {
   console.log(e.code);
   if (e.code === 'Escape') {
      instance.close();
   }
};
instance.show();
}

//Wykorzystanie metody .show