import { allowedResolutions } from '@/lib/globals/resolutions';
import openai from '@/openai';
import { NextResponse } from 'next/server';
import { ImagesResponse } from 'openai/resources/images.mjs';

export async function POST(req: Request) {
  try {
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
    return NextResponse.json({ imageURL, message: 'Image generation successful.' }, { status: 200 });
  } catch (err) {
    const message = 'Request failed. Please try again later.';
    return NextResponse.json({ message }, { status: 400 });
  }
}
