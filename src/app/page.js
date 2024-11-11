import Genres from '@/components/Genres/Genres';
import PopularMovies from '@/components/PopularMovies/PopularMovies';

import styles from './page.module.scss';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className={styles.main}>
      <PopularMovies />
      <Genres />
    </div>
  );
}
