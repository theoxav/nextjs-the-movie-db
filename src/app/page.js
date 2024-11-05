import styles from './page.module.scss';
import MediaCard from '@/components/MediaCard/MediaCard';

export default function Home() {
  return (
    <div className={styles.main}>
      <MediaCard mediaId={10} />
    </div>
  );
}
