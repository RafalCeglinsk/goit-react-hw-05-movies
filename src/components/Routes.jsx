import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" Component={Home} />
      <Route path="/Movies" Component={Movies} />
      <Route path="/MovieDetails/:movieId" Component={MovieDetails} />
      <Route path="/Cast/:movieId/cast" Component={Cast} />
      <Route path="/Movies/:movieId/reviews" Component={Reviews} />
      <Route Component={Home} />
    </Suspense>
  );
};

export default Routes;
