'use client';

import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Like = ({ movieId }) => {
  const { data: session } = useSession();
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const handleLikeClicked = async (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
      return;
    }

    const response = await fetch(`/api/like/${movieId}`, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.message === 'Movie liked') {
      setLiked(true);
      router.refresh();
    } else if (data.message === 'Movie unliked') {
      setLiked(false);
      router.refresh();
    }
  };

  return (
    <div onClick={handleLikeClicked} style={{ zIndex: 2 }}>
      <FontAwesomeIcon icon={faHeart} color={liked ? 'red' : 'grey'} />
    </div>
  );
};

export default Like;
