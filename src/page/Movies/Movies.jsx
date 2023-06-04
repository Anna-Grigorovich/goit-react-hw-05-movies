import { useState, useEffect } from 'react';
import { searchMovies } from 'service/Api';
import { Loader } from 'components/Loader/Loader';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('movieName') ?? '');

  const movieName = searchParams.get('movieName') ?? '';

  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    searchMovies(movieName).then(r => {
      setLoader(true);
      if (!r.results.length) {
        setLoader(false);
        return;
      }
      setMovies(r.results);
      setLoader(false);
    });
  }, [movieName]);
  const handleSearch = e => {
    e.preventDefault();
    console.log(query);
    if (query === '') {
      return alert('Enter movie name');
    }
    setSearchParams({ movieName: e.currentTarget.elements.search.value });
    setQuery('');
    e.currentTarget.reset();
  };
  const handleInput = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="search movie"
          onChange={handleInput}
        />
        <button type="submit">SEARCH</button>
      </form>
      <ul>
        {loader && <Loader />}
        {!movies.length && 'Enter name film'}
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
