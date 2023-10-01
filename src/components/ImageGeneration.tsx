'use client';
import { getBasePath } from '@/lib/getBasePath';
import { allowedResolutions } from '@/lib/globals/resolutions';
import { Button, Image, Input, Select, SelectItem, Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

type PromptInputProps = {
  onPromptChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResolutionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isLoading: boolean;
  handleGeneration: () => void;
};

const PromptInput = ({ onPromptChange, onResolutionChange, isLoading, handleGeneration }: PromptInputProps) => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      <Input type="text" label="Enter a prompt" onChange={onPromptChange} className="w-1/2" />
      <Select
        items={allowedResolutions}
        placeholder={'Select an image resolution'}
        label="Image resolution"
        onChange={onResolutionChange}
        className="w-1/4"
      >
        {allowedResolutions.map((resolution) => (
          <SelectItem key={resolution} value={resolution}>
            {resolution}
          </SelectItem>
        ))}
      </Select>
      <Button isLoading={isLoading} onClick={handleGeneration} className="background-zinc-800">
        Generate
      </Button>
    </div>
  );
};

type ImageDisplayProps = {
  imageURL: string;
  isLoading: boolean;
};

const ImageDisplay = ({ imageURL, isLoading }: ImageDisplayProps) => {
  return isLoading ? (
    <>
      <h3 className="text-xl text-zinc-700">Generating your image...</h3>
      <Spinner size="lg" />
    </>
  ) : (
    <Image
      src={imageURL}
      alt="No image"
      width={400}
      className="rounded-large border-2 border-zinc-100 dark:border-zinc-700"
    />
  );
};

const ImageGeneration = () => {
  const [imageURL, setImageURL] = useState('');
  const [prompt, setPrompt] = useState('');
  const [resolution, setResolution] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const { status } = DALLEResult;

    const { message, imageURL } = await DALLEResult.json();

    if (status === 200) {
      setImageURL(imageURL);
      toast(message);
    } else {
      toast.error(message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <PromptInput
        onPromptChange={handlePromptChange}
        onResolutionChange={handleResolutionChange}
        isLoading={isLoading}
        handleGeneration={handleGeneration}
      />
      <ImageDisplay imageURL={imageURL} isLoading={isLoading} />
    </>
  );
};

export default ImageGeneration;
