'use client';
import fetchImages from '@/lib/fetchers/fetchImages';
import { getBasePath } from '@/lib/getBasePath';
import { allowedResolutions } from '@/lib/globals/resolutions';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const PromptInput = () => {
  const [prompt, setPrompt] = useState('');
  const [resolution, setResolution] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: updateImages } = useSWR('/api/getImages', fetchImages, {
    revalidateOnFocus: false,
  });

  const handlePromptChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrompt(e.target.value);
  };

  const handleResolutionChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResolution(e.target.value);
  };

  const handleGeneration = async () => {
    setIsLoading(true);

    // Check request parameters before calling route handler
    if (prompt.length === 0) {
      toast.error('Please enter a prompt.');
      setIsLoading(false);
      return;
    }

    if (!allowedResolutions.includes(resolution)) {
      toast.error('Please select an image resolution.');
      setIsLoading(false);
      return;
    }

    const DALLEResult = await fetch(`${getBasePath()}/api/generateImage`, {
      method: 'POST',
      body: JSON.stringify({ prompt, resolution }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { message } = await DALLEResult.json();

    if (!DALLEResult.ok) {
      toast.error(message);
    } else {
      // Revalidate the SWR query on successful generation
      updateImages();
      toast(message);
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-4 lg:mb-10 w-full px-10">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <Input
          placeholder="Enter a prompt..."
          size="lg"
          onChange={handlePromptChange}
          className="p-0 max-w-sm lg:max-w-none order-first"
        />
        <Button
          isLoading={isLoading}
          onClick={handleGeneration}
          size="lg"
          className={`font-bold order-last lg:order-2 ${
            prompt && resolution
              ? 'bg-violet-500 hover:bg-violet-400 text-white transition-colors duration-200'
              : 'bg-white dark:bg-zinc-700 text-gray-300 dark:text-zinc-500 cursor-not-allowed'
          }`}
        >
          Generate
        </Button>
        <Select
          items={allowedResolutions}
          placeholder={'Select an image resolution'}
          label="Image resolution"
          onChange={handleResolutionChange}
          size="sm"
          radius="md"
          className="max-w-sm lg:max-w-xs order-2 lg:order-last"
        >
          {allowedResolutions.map((resolution) => (
            <SelectItem key={resolution} value={resolution}>
              {resolution}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default PromptInput;
