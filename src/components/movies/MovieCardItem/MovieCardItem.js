import styles from './MovieCardItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Like from './Like/Like';

const MovieCardItem = ({ media, locale }) => {
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/movies/${media.id}`}>
        <div className={styles.image}>
          <Like movieId={media.id} />
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString('fr-FR')}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardItem;
