import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs.js';

let lightbox = null;

// повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати
// метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function createGallery(images) {
  const markup =
    // refs.gallery.innerHTML =
    images
      .map(
        image =>
          `<li>
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}">
          </a>
       </li>`
      )
      .join('');

  refs.gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
  //TODO add options
}

//Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.
// Нічого не повертає.
export function clearGallery() {
  refs.gallery.innerHTML = '';
}

//Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.
// Нічого не повертає.
export function showLoader() {}

//Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.
// Нічого не повертає.
export function hideLoader() {}
