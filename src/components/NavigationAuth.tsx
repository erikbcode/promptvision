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
    <div className="flex flex-row items-center mx-4">
      {session ? (
        <Button onClick={() => signOut()} className="font-semibold hover:bg-zinc-400 dark:hover:bg-zinc-600">
          Sign Out
        </Button>
      ) : (
        <Button href="/sign-in" as={Link} color="primary" className="font-semibold hover:bg-blue-500">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default NavigationAuth;
