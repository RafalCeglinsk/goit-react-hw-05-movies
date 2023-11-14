import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieCredits } from 'api/getMovieCredits';

function Cast() {
  const location = useLocation();
  const [credits, setCredits] = useState([]);
  const [movieId] = useState(location.state.movieId);

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const data = await getMovieCredits(movieId);
        setCredits(data);
      } catch (error) {
        console.error('Error while fetching movie credits', error);
      }
    }

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {credits.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
