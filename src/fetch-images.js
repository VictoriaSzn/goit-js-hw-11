import axios from 'axios';

export default async function fetchImages(value, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '32852753-8f3b804226363e950fb952518';
  const filter = `?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${BASE_URL}${filter}`).then(response => response.data);
}

