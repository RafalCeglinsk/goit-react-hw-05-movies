import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMoviesByQuery } from 'api/getMoviesByQuery';

function Movies() {
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
      <h2>Search Movies</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter a movie title..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            {' '}
            <Link to={`/movies/${movie.id}`} state={{ movieId: movie.id }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
