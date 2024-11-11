import { useState, useEffect } from 'react';
import { useCurrentLanguage } from './useCurrentLanguage';
import { getDictionary } from '@/services/dictionaries';

const useDictionary = () => {
  const [i18n, setI18n] = useState({});
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(currentLanguage);
      setI18n(dictionary);
    };

    fetchDictionary();
  }, [currentLanguage]);

  return i18n;
};

export default useDictionary;
