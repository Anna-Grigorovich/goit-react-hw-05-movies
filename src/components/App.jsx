import { Route, Routes } from 'react-router-dom/dist';
import { Layout } from './Layout/Layout';
// import Home from 'page/Home/Home';
// import Movies from 'page/Movies/Movies';
// import MovieDetails from 'page/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
