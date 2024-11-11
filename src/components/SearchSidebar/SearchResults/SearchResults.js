import { getMovieByPath } from '@/services/movies';
import styles from './SearchResults.module.scss';
import MovieCardItem from '@/components/movies/MovieCardItem/MovieCardItem';

const SearchResults = async ({ genreId, searchParams, locale }) => {
  const { results } = await getMovieByPath(
    '/discover/movie',
    [
      { key: 'sort_by', value: searchParams['sort_by'] },
      { key: 'release_date.gte', value: searchParams['release_date.gte'] },
      { key: 'release_date.lte', value: searchParams['release_date.lte'] },
      { key: 'with_genres', value: genreId },
    ],
    locale
  );

  return (
    <div className={styles.results}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MovieCardItem key={movie.id} media={movie} locale={locale} />
        ))}
    </div>
  );
};

export default SearchResults;
