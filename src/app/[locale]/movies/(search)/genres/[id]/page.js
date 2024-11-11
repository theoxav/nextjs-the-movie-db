import SearchResults from '@/components/SearchSidebar/SearchResults/SearchResults';
import React from 'react';

const GenreIdPage = ({ params: { id, locale }, searchParams }) => {
  return (
    <SearchResults genreId={id} searchParams={searchParams} locale={locale} />
  );
};

export default GenreIdPage;
