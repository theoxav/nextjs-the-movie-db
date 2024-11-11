import Image from 'next/image';
import Link from 'next/link';

import styles from './MovieSearchResults.module.scss';

const MovieSearchResult = ({ movieResults, onResultClick, locale }) => {
  return (
    <div className={styles.searchResults}>
      {movieResults.map((movie) => (
        <div key={movie.id} onClick={onResultClick}>
          <Link href={`/${locale}/movies/${movie.id}`}>
            <Image
              width={90}
              height={50}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieSearchResult;
