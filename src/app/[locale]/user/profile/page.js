import MovieCardItem from '@/components/movies/MovieCardItem/MovieCardItem';
import LogoutButton from '@/components/ui/LogoutButton/LogoutButton';
import { getHydratedMovies } from '@/services/movies';
import prisma from '@/services/prisma';
import { getServerSession } from 'next-auth';
import styles from './page.module.scss';

const ProfilePage = async ({ params: { locale } }) => {
  const { user: userSession } = await getServerSession();
  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    movieLikes.map((movie) => movie.movieId)
  );

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <h1>Liste des films aimés</h1>
        <LogoutButton />
      </div>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCardItem key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
