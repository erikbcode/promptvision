import SignUp from '@/components/SignUp';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href="/" className="self-start -mt-20">
          <ChevronLeftIcon />
          Home
        </Link>
        <SignUp />
      </div>
    </div>
  );
}
