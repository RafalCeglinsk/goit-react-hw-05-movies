import axios from 'axios';

const API_KEY = 'c065ab5e538040cab742d0cd9aa41895';

export const getMovieCredits = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });
  try {
    const response = await axios.get(`${URL}?${searchParams}`);
    const data = await response.data;
    const cast = data.cast;
    return cast;
  } catch (error) {
    console.error('Error while fetching movie credits:', error);
  }
};
