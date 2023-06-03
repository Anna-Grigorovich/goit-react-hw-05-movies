import { getReviews } from 'service/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import c from './Reviews.module.css';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(r => setReviewsList(r.results));
  }, [movieId]);

  return (
    <ul>
      {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id} className={c.itemComent}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
  );
};
export default Reviews;
