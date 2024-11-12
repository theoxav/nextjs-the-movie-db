'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MovieSearch from '@/components/movies/MovieSearch/MovieSearch';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { getDictionary } from '@/services/dictionaries';
import { useSession } from 'next-auth/react';

const Header = ({ locale }) => {
  const { data: session } = useSession();
  const [i18n, setI18n] = useState({});

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(locale);
      setI18n(dictionary);
    };

    fetchDictionary();
  }, [locale]);

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(null, { callbackUrl: `/${locale}/user/profile` });
  };

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
              <Link href={`/${locale}/series`}>{i18n.header?.series}</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>{i18n.header?.movies}</Link>
            </li>
            {!session && (
              <>
                <li>
                  <Link href={`/${locale}/signup`}>Inscription</Link>
                </li>
                <li>
                  <a href="#" onClick={handleSignIn}>
                    Connexion
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div>
        <Link href={`/${locale}/user/profile`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
