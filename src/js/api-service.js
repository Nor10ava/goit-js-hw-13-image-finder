import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '23278323-a611400ba47992ab8bd1f89a0';

function getPictures(query, page) {
  return axios.get(
    `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${KEY}`,
  );
}

export default getPictures;
