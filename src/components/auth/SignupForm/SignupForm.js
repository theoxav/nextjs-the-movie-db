'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import styles from './SignupForm.module.scss';

const SignupForm = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/user/profile');
    }
  }, [status, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };

  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="******" />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default SignupForm;
