import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/getTrending';

function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Error while fetching trending movies', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div className="HomeContainer">
      <h2 className="Tittle">Trending Movies</h2>
      <ul className="HomeList">
        {movies.map(movie => (
          <li className="HomeListItem" key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, movieId: movie.id }}
            >
              <img
                className="HomeListImg"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
Home.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
export default Home;
