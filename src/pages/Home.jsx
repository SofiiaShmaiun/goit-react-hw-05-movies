import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    getTrendingMovie()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <main>
      <h1>Trending today</h1>
      {movies !== null && (
        <MoviesList movies={movies} state={{ from: location }}></MoviesList>
      )}
    </main>
  );
};

export default Home;
