import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    <div className="ActorContainer">
      <ul className="ActorList">
        {credits.map(actor => (
          <li key={actor.id}>
            <img
              className="CastImg"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : 'https://d32qys9a6wm9no.cloudfront.net/images/others/not_available/poster_500x735.png?t=1699920683'
              }
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

Cast.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
