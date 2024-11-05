import Popular from '@/components/Popular/Popular';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
}
