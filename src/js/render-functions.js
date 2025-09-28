import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs.js';

let lightbox = null;

// повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати
// метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function createGallery(images) {
  const markup =
    images
      .map(
        image =>
          `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${image.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${image.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${image.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${image.downloads}</p>
            </li>
           </ul>
       </li>`
      )
      .join('');

  refs.gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
  } else {
    lightbox.refresh();
  }
}

//Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.
// Нічого не повертає.
export function clearGallery() {
  refs.gallery.innerHTML = '';
  console.log(`CALL CLEAR GALLERY ${new Date}`);
}

//Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.
// Нічого не повертає.
export function showLoader() {}

//Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.
// Нічого не повертає.
export function hideLoader() {}
