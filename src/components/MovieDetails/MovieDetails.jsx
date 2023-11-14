import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        console.log(data);
      } catch (error) {
        console.error('Error while fetching movie details', error);
      }
    }

    fetchMovieDetails();
  }, []);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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

      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt={details.title}
      />

      <ul>
        <p>Additional Information</p>
        <li>
          <Link to="cast" state={{ movieId: movieId }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ movieId: movieId }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MovieDetails;
