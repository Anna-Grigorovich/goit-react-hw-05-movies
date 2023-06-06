import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { getMovieDetails } from 'service/Api';
import c from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');
  const score = (movies.vote_average * 10).toFixed(0);
  const { original_title, overview, genres, poster_path } = movies;

  useEffect(() => {
    getMovieDetails(movieId).then(r => {
      setMovies(r);
    });
  }, [movieId]);

  if (!original_title) {
    return (
      <>
        <Navigate to="/" replace={true} />
      </>
    );
  }

  return (
    <div className={c.container}>
      <Link to={backLocation.current}>Go to back</Link>
      <div className={c.wrapperMovie}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          alt="poster"
        />
        <div>
          <h2>{original_title}</h2>
          <p>User score: {score}%</p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>

          <ul className={c.genresList}>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => (
                <li key={id} className={c.genresItem}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={c.info}>
        <h4>Additional information</h4>
        <ul className={c.infoMovies}>
          <li className={c.infoItem}>
            <Link to="cast">
              <button className={c.Btn}>CAST</button>
            </Link>
          </li>
          <li className={c.infoItem}>
            <Link to="reviews">
              <button className={c.Btn}>REVIEWS</button>
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
