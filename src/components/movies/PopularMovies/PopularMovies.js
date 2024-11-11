import { getMovieByPath } from '@/services/movies';
import MovieCardItem from '../MovieCardItem/MovieCardItem';
import styles from './PopularMovies.module.scss';
import { getDictionary } from '@/services/dictionaries';

const PopularMovies = async ({ locale }) => {
  const { results } = await getMovieByPath('/movie/popular', [], locale);
  const popularMovies = results.slice(0, 6);
  const i18n = await getDictionary(locale);

  return (
    <div>
      <h2>{i18n.popular.title}</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MovieCardItem key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
