import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieCredits } from 'service/Api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(r => {
      setCredits(r);
      console.log(r);
    });
  }, [movieId]);
  return <div>CAST</div>;
};

export default Cast;
