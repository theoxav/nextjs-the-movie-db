import { getMovieByPath } from '@/services/movies';
import styles from './SimilarMovies.module.scss';
import MovieCardItem from '../MovieCardItem/MovieCardItem';

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`);

  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie) => (
          <MovieCardItem key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
