import SearchResults from '@/components/SearchSidebar/SearchResults/SearchResults';
import React from 'react';

const GenreIdPage = ({ params, searchParams }) => {
  return <SearchResults genreId={params.id} searchParams={searchParams} />;
};

export default GenreIdPage;
