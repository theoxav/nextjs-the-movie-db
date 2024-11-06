import 'server-only';

export const getMovieByPath = async (path, params = [], language = 'fr-FR') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY);
  url.searchParams.append('language', language);
  params
    .filter((param) => param.value)
    .forEach((param) => url.searchParams.append(param.key, param.value));

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Erreur lors de l'appel API:", error);
    return { results: [] };
  }
};
