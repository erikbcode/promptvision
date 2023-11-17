import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db';
import { allowedResolutions } from '@/lib/globals/resolutions';
import s3 from '@/lib/s3Client';
import openai from '@/openai';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';
import { ImagesResponse } from 'openai/resources/images.mjs';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return NextResponse.json(
        {
          message: 'You must be signed in to do that.',
        },
        { status: 400 },
      );
    }

    const { prompt, resolution } = await req.json();

    if (!allowedResolutions.includes(resolution) || prompt.length <= 0) {
      return NextResponse.json(
        {
          message: 'Invalid inputs. Please enter a prompt and select a resolution',
        },
        { status: 400 },
      );
    }

    const apiResponse: ImagesResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: resolution,
    });

    const imageURL = apiResponse['data'][0]['url'];

    if (!imageURL) {
      throw new Error('Unable to retrieve image URL. Please try again later.');
    }

    const res = await fetch(imageURL);
    const imageBuffer = await res.arrayBuffer();

    const timestamp = new Date().getTime();
    const filename = `${prompt}_${timestamp}.png`;

    const command = new PutObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: filename });
    const presignedURL = await getSignedUrl(s3, command, { expiresIn: 60 });

    const uploadRes = await fetch(presignedURL, {
      method: 'PUT',
      body: imageBuffer,
      headers: {
        'Content-Type': 'image/png',
      },
    });

    if (!uploadRes.ok) {
      throw new Error('Image generation upload failed.');
    }

    await prisma.image.create({
      data: {
        accessUrl: `${process.env.AWS_CLOUDFRONT_PREFIX}/${filename}`,
        prompt,
        creatorId: session.user.id,
        timestamp,
      },
    });

    return NextResponse.json({ imageURL, message: 'Image generation successful.' }, { status: 200 });
  } catch (err) {
    // if (err instanceof Error) {
    //   console.log(err.message);
    // }
    const message = 'Request failed. Please try again later.';
    return NextResponse.json({ message }, { status: 400 });
  }
}
