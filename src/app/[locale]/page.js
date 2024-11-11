import Genres from '@/components/Genres/Genres';
import PopularMovies from '@/components/movies/PopularMovies/PopularMovies';

import styles from './page.module.scss';

export const revalidate = 86400;

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <PopularMovies locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
