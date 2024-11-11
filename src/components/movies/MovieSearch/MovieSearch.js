'use client';

import { useState, useRef, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import MovieSearchResult from './MovieSearchResult/MovieSearchResult';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';

import styles from './MovieSearch.module.scss';
import useDictionary from '@/hooks/useDictionary';

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);
  const i18n = useDictionary();
  const currentLanguage = useCurrentLanguage();

  const updateMovieSearch = async (query) => {
    const response = await fetch(
      `/api/movies/search?query=${query}&language=${currentLanguage}`
    );
    const { results } = await response.json();

    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.searchContainer}
      onMouseDown={() => setIsFocused(true)}
    >
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder={i18n?.header?.['search-placeholder']}
      />

      {movieResults.length > 0 && isFocused && (
        <MovieSearchResult
          movieResults={movieResults}
          onResultClick={() => setIsFocused(false)}
          locale={currentLanguage}
        />
      )}
    </div>
  );
};

export default MovieSearch;
