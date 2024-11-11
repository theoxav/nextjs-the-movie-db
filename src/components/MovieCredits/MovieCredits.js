import { getMovieByPath } from '@/services/movies';
import styles from './MovieCredits.module.scss';
import Image from 'next/image';

const MovieCredits = async ({ movieId }) => {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`);

  return (
    <div className={styles.credits}>
      {cast.slice(0, 4).map((actor) => (
        <div key={actor.id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${actor.profile_path}`}
            alt={actor.name}
            width={90}
            height={90}
          />
          <p>{actor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
