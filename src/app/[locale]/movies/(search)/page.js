import SearchResults from '@/components/SearchSidebar/SearchResults/SearchResults';

const MoviesPage = ({ searchParams, params: { locale } }) => {
  return <SearchResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
