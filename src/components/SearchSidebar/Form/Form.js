'use client';

import useDictionary from '@/hooks/useDictionary';
import styles from './Form.module.scss';
import { useRouter, usePathname } from 'next/navigation';

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();
  const i18n = useDictionary();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append('sort_by', form.get('sort'));
    searchParams.append('release_date.gte', form.get('fromDate'));
    searchParams.append('release_date.lte', form.get('toDate'));

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>{i18n?.movies?.form?.filter}</h2>
      <div className={styles.date}>
        <h3>{i18n?.movies?.form?.['release-date']}</h3>

        <div>
          <p>{i18n?.movies?.form?.from}</p>
          <input type="date" name="fromDate" />
        </div>
        <div>
          <p>{i18n?.movies?.form?.to}</p>
          <input
            type="date"
            name="toDate"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>
      <div>
        <h3>{i18n?.movies?.form?.['sort-by']}</h3>
        <select name="sort">
          <option value={'popularity.desc'}>
            {i18n?.movies?.form?.popularity}
          </option>
          <option value={'vote_average.desc'}>
            {i18n?.movies?.form?.['vote-average']}
          </option>
          <option value={'cote_count.desc'}>
            {i18n?.movies?.form?.['vote-count']}
          </option>
        </select>
      </div>
      <input type="submit" value={i18n?.movies?.form?.search} />
    </form>
  );
};

export default Form;
