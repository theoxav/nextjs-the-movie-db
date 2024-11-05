import Image from 'next/image';
import Link from 'next/link';

import styles from './MovieSearchResults.module.scss';

const MovieSearchResult = ({ movieResults }) => {
  return (
    <div className={styles.searchResults}>
      {movieResults.map((movie) => (
        <div key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <Image
              width={90}
              height={50}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
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
