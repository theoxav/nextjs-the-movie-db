import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MovieSearch from '@/components/movies/MovieSearch/MovieSearch';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { getDictionary } from '@/services/dictionaries';

const Header = async ({ locale }) => {
  const i18n = await getDictionary(locale);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href={`/${locale}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>{i18n.header.series}</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>{i18n.header.movies}</Link>
            </li>
            <li>
              <Link href={`/${locale}/signup`}>Inscription</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <MovieSearch />
        <Link href={`/${locale}/user/profile`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
