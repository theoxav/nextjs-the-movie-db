'use client';

import { useState, useRef, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import MovieSearchResult from './MovieSearchResult/MovieSearchResult';

import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
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
        placeholder="Rechercher un titre ..."
      />

      {movieResults.length > 0 && isFocused && (
        <MovieSearchResult
          movieResults={movieResults}
          onResultClick={() => setIsFocused(false)}
        />
      )}
    </div>
  );
};

export default MovieSearch;
