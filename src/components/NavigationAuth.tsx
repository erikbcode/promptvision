'use client';
import { Button } from '@nextui-org/react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

type NavigationAuthProps = {
  session: Session | null;
};

const NavigationAuth = ({ session }: NavigationAuthProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button href="/sign-in" as={Link} color="primary" className="font-semibold hover:bg-blue-500">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default NavigationAuth;
