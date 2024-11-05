import styles from './MediaCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const MediaCard = ({ mediaId }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Link href={`/movies/${mediaId}`}>
          <Image
            src="https://cdn.pixabay.com/photo/2019/10/31/08/26/film-4591329_1280.jpg"
            alt="media title"
            fill
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h2>Creed 3</h2>
        <p>Le 01/03/2023</p>
      </div>
    </div>
  );
};

export default MediaCard;
