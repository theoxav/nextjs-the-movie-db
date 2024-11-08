import SearchSidebar from '@/components/SearchSidebar/SearchSidebar';

import styles from './layout.module.scss';
import { getMovieByPath } from '@/services/movies';

const MovieSearchLayout = async ({ children }) => {
  const { genres } = await getMovieByPath('/genre/movie/list');

  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
