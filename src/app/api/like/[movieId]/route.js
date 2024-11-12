import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import prisma from '@/services/prisma';

export async function POST(request, { params: { movieId } }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: token.email },
    include: { movieLikes: true },
  });

  const movieAlreadyLiked = user.movieLikes.some(
    (like) => like.movieId === movieId
  );

  if (movieAlreadyLiked) {
    await prisma.movieLike.deleteMany({
      where: {
        userId: user.id,
        movieId: movieId,
      },
    });
    return NextResponse.json({ message: 'Movie unliked' });
  } else {
    await prisma.movieLike.create({
      data: {
        movieId: movieId,
        user: {
          connect: { id: user.id },
        },
      },
    });
    return NextResponse.json({ message: 'Movie liked' });
  }
}
