import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/Cast/:movieId/cast" element={<Cast />} />
        <Route path="/Movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
