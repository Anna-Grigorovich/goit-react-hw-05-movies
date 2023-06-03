// import { useLocation } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'service/Api';
import c from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    getTrending().then(r => {
      setTrandMovie(r.results);
      setLoader(false);
    });
  }, []);
  return (
    <main>
      <h1>Top Movies for today</h1>
      <ul>
        {loader && <Loader />}
        {trandMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;