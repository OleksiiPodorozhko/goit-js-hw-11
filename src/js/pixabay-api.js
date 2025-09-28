import axios from 'axios';
import { showError } from './iziToastHelper.js';

//Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
const key = '52494269-f940d25beafa0bafe61525357';
const url = 'https://pixabay.com/api/';
const imagesPerPage = 9;

export function getImagesByQuery(query) {
  return axios.get(url, getParams(query))
    .then(response => {
      const images = response.data.hits;

      if (!images || !images.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      return images;
    })
    .catch(error => {
      showError(error.message);
      throw error;
    });
}

function getParams(query) {
  return {
    params: {
      key: key,
      q: query,
      image_type: 'image/png',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imagesPerPage,
    },
  };
}
