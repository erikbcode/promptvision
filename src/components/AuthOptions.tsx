'use client';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AuthOptions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGitHub = async () => {
    setIsLoading(true);

    try {
      await signIn('github');
    } catch (error) {
      toast('There was an error loggin in with GitHub.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <Button
        onClick={loginWithGitHub}
        isLoading={isLoading}
        className="flex flex-row w-full gap-2 items-center justify-center"
      >
        <Image width="20" height="20" src="/images/github-logo.png" alt="Github logo" />
        Sign In With GitHub
      </Button>
    </div>
  );
};

export default AuthOptions;
