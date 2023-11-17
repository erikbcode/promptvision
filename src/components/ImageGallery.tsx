'use client';
import fetchImages from '@/lib/fetchers/fetchImages';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const ImageGallery = () => {
  const [hasErrorDisplayed, setHasErrorDisplayed] = useState(false);

  type ImageType = {
    url: string;
    prompt: string;
  };

  const {
    data,
    error,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR('/api/getImages', fetchImages, { revalidateOnFocus: false });

  if (error && !hasErrorDisplayed) {
    toast.error(
      'There was an error when fetching images. Please ensure the application and environment variables are correectly configured as specified in the README.',
    );
    setHasErrorDisplayed(true);
  }

  return (
    <div>
      <Button
        onClick={() => refreshImages(data)}
        className="fixed bottom-10 right-10 bg-violet-400/90 text-white px-5 py-3 rounded-md hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 font-bold z-20 "
      >
        {!isLoading && isValidating ? 'Refreshing...' : 'Refresh Images'}
      </Button>
      {isLoading && (
        <p className="animate-pulse text-center pb-7 font-extralight">
          Loading <span className="text-emerald-600 font-semibold">AI</span> Generated Images...
        </p>
      )}
      {error && <h2>There was an error when fetching images. Please check your configuration and try again.</h2>}
      <div className="mx-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10 w-full">
        {data?.images?.map((image: ImageType, i: number) => (
          <div
            key={image.prompt}
            className={`relative cursor-help ${
              i === 0 && 'md:col-span-2 md:row-span-2'
            } hover:scale-[103%] transition-transform duration-200 ease-in-out`}
          >
            {/* White div that appears with desription when image is hovered */}
            <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 rounded-md z-10">
              <p className="text-center p-5 text-zinc-600">{image.prompt}</p>
            </div>
            <Image
              src={image.url}
              alt={image.prompt}
              width={800}
              height={800}
              className="w-full rounded-md shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
