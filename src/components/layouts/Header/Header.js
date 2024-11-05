import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MovieSearch from '@/components/MovieSearch/MovieSearch';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">Series</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <MovieSearch />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}
