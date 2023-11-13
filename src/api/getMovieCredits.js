import axios from 'axios';

const API_KEY = 'c065ab5e538040cab742d0cd9aa41895';
const URL = 'https://api.themoviedb.org/3/movie/movie_id';

export const getMovieCredits = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;

  return data;
};
