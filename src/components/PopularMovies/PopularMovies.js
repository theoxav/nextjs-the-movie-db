import { getMovieByPath } from '@/services/movies';
import MovieCardItem from '../movies/MovieCardItem/MovieCardItem';
import styles from './PopularMovies.module.scss';

const PopularMovies = async () => {
  const { results } = await getMovieByPath('/movie/popular');
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MovieCardItem key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
