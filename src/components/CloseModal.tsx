'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const CloseModal = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.back()}>X</Button>
    </div>
  );
};

export default CloseModal;
