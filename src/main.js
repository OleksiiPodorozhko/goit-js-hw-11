// import './js/pixabay-api.js';
// import './js/render-functions.js';

//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast,
// усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай
// їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api.js';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.elements['search-text'].value.trim();

  if(!inputValue) return;

  getImagesByQuery(inputValue);
});