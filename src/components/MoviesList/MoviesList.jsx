import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.map(movie => (
        <Link
          to={`movies/${movie.id}`}
          key={movie.id}
          state={{ from: location }}
        >
          <li>{movie.title}</li>
        </Link>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
