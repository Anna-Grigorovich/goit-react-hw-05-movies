import { useState, useEffect } from 'react';
import { searchMovies } from 'service/Api';
import { Loader } from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    searchMovies(query).then(r => {
      setLoader(true);
      if (!r.results.length) {
        setLoader(false);
        return;
      }
      setMovies(r.results);
      setLoader(false);
    });
  }, [query]);
  const handleSearch = e => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.search.value);
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="search movie" />
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
