import MovieDetails from '@/components/MovieDetails/MovieDetails';
import { getMovieByPath } from '@/services/movies';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const revalidate = 3600;

const MovieIdPage = async ({ params }) => {
  const movie = await getMovieByPath(`/movie/${params.id}`);

  if (!movie) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieIdPage;
