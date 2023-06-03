// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Title } from './Home.styled';
// import { getTrending } from '../../Api/apiService';
// import { Loader } from 'components/Loader/Loader';

const Home = () => {
  return (
    <main>
      <h1>Top Movies for today</h1>
      {/* <Title>Top Movies for today</Title> */}
      {/* <MovieList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList> */}
    </main>
  );
};
export default Home;
