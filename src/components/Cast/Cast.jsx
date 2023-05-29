import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchCast = () => {
    getCast(movieId)
      .then(response => {
        setCast(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section>
      {cast !== null && (
        <ul>
          {cast.cast.map(item => (
            <li key={item.id}>
              {item.profile_path !== null ? (
                <img
                  src={
                    'https://www.themoviedb.org/t/p/w500' + item.profile_path
                  }
                  alt={item.name}
                  width="50px"
                />
              ) : (
                ''
              )}
              {item.name}
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cast;
