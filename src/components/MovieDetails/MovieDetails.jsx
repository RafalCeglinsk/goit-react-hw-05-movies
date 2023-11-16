import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieDetails } from 'api/getMovieDetails';

function MovieDetails() {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [movieId] = useState(location.state.movieId);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setDetails(data);
      } catch (error) {
        console.error('Error while fetching movie details', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="MovieContainer">
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
          className="DetailsImg"
        />
        <div className="MovieInfo">
          <h2>{details.title}</h2>
          <p>User Score: {details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h2>Genres</h2>
          <p>
            {details.genres.map(genre => (
              <span key={genre.id}>{genre.name}, </span>
            ))}
          </p>
          <Link to={location.state.from} state={{ from: location }}>
            Go back
          </Link>
        </div>
      </div>
      <div>
        <h2 className="AdditionalInfo">Additional Information</h2>
        <ul className="AdditionalContainer">
          <Outlet />
          <li>
            <Link to="cast" state={{ from: location, movieId: movieId }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location, movieId: movieId }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
