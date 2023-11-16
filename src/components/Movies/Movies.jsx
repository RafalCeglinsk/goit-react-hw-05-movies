import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getMoviesByQuery } from 'api/getMoviesByQuery';

function Movies() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await getMoviesByQuery(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies', error);
    }
  };

  return (
    <div>
      <h2 className="Tittle">Search Movies</h2>
      <div className="InputContainer">
        <input
          className="MoviesInput"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter a movie title..."
        />
        <button onClick={handleSearch} className="SearchButton">
          Search
        </button>
        <Link
          to={location.state.from}
          state={{ from: location, movieId: location.state.movieId }}
          className="MoviesBackLink"
        >
          Go back
        </Link>
      </div>

      <ul className="MovieList">
        {searchResults.map(movie => (
          <li key={movie.id}>
            {' '}
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, movieId: movie.id }}
            >
              <img
                className="MovieListImg"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://d32qys9a6wm9no.cloudfront.net/images/others/not_available/poster_500x735.png?t=1699920683'
                }
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
