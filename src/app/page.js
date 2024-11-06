import Genres from '@/components/Genres/Genres';
import Popular from '@/components/Popular/Popular';

import styles from './page.module.scss';

export const revalidate = 86400;

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
