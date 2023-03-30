import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', onClick)

   const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
gallery.insertAdjacentHTML('beforeend', markup)
 
function onClick(evt) {
    evt.preventDefault();
     new SimpleLightbox('.gallery a', { captionsData: 'alt',captionDelay: 250,scrollZoom: false,})

};

