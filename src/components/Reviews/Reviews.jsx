import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviews } from 'api/getMovieReviews';
import { useLocation } from 'react-router-dom';

function Reviews() {
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const [movieId] = useState(location.state.movieId);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.error('Error while fetching movie reviews', error);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
