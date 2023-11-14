import axios from 'axios';

const API_KEY = 'c065ab5e538040cab742d0cd9aa41895';

export const getMovieCredits = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });
  try {
    const response = await axios.get(`${URL}?${searchParams}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error while fetching movie credits:', error);
  }
};
