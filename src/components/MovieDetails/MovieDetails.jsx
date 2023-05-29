import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { getDetails } from 'services/api';
import { BackLink } from '../BackLink/BackLink';

const MovieDetails = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [details, seDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    getDetails(movieId)
      .then(response => {
        seDetails(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section>
      <BackLink backLink={backLink} />
      {details !== null && (
        <section>
          <h2>
            {details.title} ({details.release_date.slice(0, 4)})
          </h2>
          <img
            src={'https://www.themoviedb.org/t/p/w500' + details.poster_path}
            alt={details.title}
            width="300px"
          />
          <p>User Score: {(details.vote_average * 10).toFixed(2)}%</p>
          <div>
            <h3>Overview</h3>
            <p>{details.overview}</p>
          </div>

          <div>
            <h3>Genres</h3>
            {details.genres.length > 0
              ? details.genres.map(item => <li key={item.id}>{item.name}</li>)
              : ''}
          </div>
        </section>
      )}

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
