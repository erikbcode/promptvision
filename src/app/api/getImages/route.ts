import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const images = await prisma.image.findMany({
      where: {},
      orderBy: {
        createdAt: 'desc',
      },
    });

    const formattedImages = images.map((image) => {
      return {
        url: image.accessUrl,
        prompt: image.prompt,
      };
    });

    return NextResponse.json({ images: formattedImages }, { status: 200 });
  } catch (err) {
    return NextResponse.json({}, { status: 400 });
  }
}
