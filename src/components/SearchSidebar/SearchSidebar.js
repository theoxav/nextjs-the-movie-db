'use client';

import { useSelectedLayoutSegment, useParams, notFound } from 'next/navigation';
import Form from './Form/Form';

import styles from './SearchSidebar.module.scss';
import useDictionary from '@/hooks/useDictionary';

const SearchSidebar = ({ genres }) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();
  const i18n = useDictionary();

  const getSidebarTitle = () => {
    if (!segment) {
      return i18n?.movies?.movies;
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();

  return (
    <div className={styles.sidebar}>
      <h1>
        {i18n?.movies?.all} &quot;{title}&quot;
      </h1>
      <Form />
    </div>
  );
};

export default SearchSidebar;
