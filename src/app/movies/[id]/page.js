import MovieDetails from '@/components/movies/MovieDetails/MovieDetails';
import SimilarMovies from '@/components/movies/SimilarMovies/SimilarMovies';
import { getMovieByPath } from '@/services/movies';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

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
      <Suspense fallback={<p>Chargement...</p>}>
        <SimilarMovies movieId={movie.id} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
