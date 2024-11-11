import { defaultLocale } from '@/services/i18n';
import { useParams } from 'next/navigation';

export const useCurrentLanguage = () => {
  const params = useParams();

  return params.locale || defaultLocale;
};
