import axios from 'axios';

const API_KEY = 'c065ab5e538040cab742d0cd9aa41895';

export const getMoviesByQuery = async query => {
  const URL = 'https://api.themoviedb.org/3/search/movie';
  const searchParams = new URLSearchParams({
    query: query,
    api_key: API_KEY,
    language: 'en-US',
  });
  try {
    const response = await axios.get(`${URL}?${searchParams}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error while fetching movies', error);
  }
};
