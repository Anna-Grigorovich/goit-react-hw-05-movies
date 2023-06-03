import { useEffect, useState } from 'react';
import { getMovieCredits } from 'service/Api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(r => {
      setCredits(r.cast);
    });
  }, [movieId]);
  return (
    <ul>
      {credits.length > 0
        ? credits.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <p>{name}</p>
              <p> Character: {character}</p>
            </li>
          ))
        : "Sorry, there isn't any info :("}
    </ul>
  );
};

export default Cast;
