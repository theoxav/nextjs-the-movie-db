import 'server-only';

export const getMovieByPath = async (path, params = [], language = 'fr-FR') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY);
  url.searchParams.append('language', language);
  params.forEach((param) => url.searchParams.append(param.key, param.value));

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
