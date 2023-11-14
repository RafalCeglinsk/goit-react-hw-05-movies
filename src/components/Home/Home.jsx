import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'api/getTrending';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, movieId: movie.id }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
