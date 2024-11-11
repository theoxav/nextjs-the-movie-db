import { getMovieByPath } from '@/services/movies';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const language = searchParams.get('language');

  const searchResults = await getMovieByPath('/search/movie', [
    { key: 'query', value: query },
    { key: 'language', value: language },
  ]);

  return new Response(JSON.stringify(searchResults), { status: 200 });
}
