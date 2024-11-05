import { Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>MyMovieApp</p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>Séries</li>
            <li>Films</li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="Rechercher un titre..." />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}
