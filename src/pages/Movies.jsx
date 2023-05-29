import { useSearchParams, Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getByQuery } from 'services/api';

const Movies = () => {
  const location = useLocation();
  const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    const fetchMovies = () => {
      getByQuery(movieName)
        .then(response => {
          setQuery(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchMovies();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ movieName: form.elements.movieName.value });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          placeholder="Search movie..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>

      {query !== null && movieName !== '' && (
        <ul>
          {' '}
          {query.map(movie => (
            <Link
              to={`${movie.id}`}
              key={movie.id}
              state={{ from: location }}
            >
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      )}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
