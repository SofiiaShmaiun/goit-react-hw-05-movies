import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/api';

const Reviews = () => {
  const [reviews, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchCast = () => {
    getReview(movieId)
      .then(response => {
        setReview(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section>
      {reviews !== null && reviews.results.length === 0 ? (
        <p>There is no reviews</p>
      ) : (
        <ul>
          {reviews !== null &&
            reviews.results.map(item => (
              <li key={item.id}>
                <p>Author: {item.author}</p>
                {item.content}
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
