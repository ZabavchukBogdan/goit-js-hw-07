import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', onClick)


   const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
 gallery.insertAdjacentHTML('beforeend', markup)

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    } 
    const imgSource = evt.target.dataset.source
    const instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600">
`);
    instance.show();
};


