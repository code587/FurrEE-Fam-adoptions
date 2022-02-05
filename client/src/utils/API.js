import axios from 'axios';

const search = async (query) =>
  axios.get(`https://dog.ceo/api/breed/${query}/images/random/3`);

export default { search };
