import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import NavigationAuth from './NavigationAuth';

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="sticky top-0 inset-x-0 h-fit bg-zinc-100 dark:bg-zinc-900 dark:border-b dark:border-zinc-800 z-[40] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-around xl:justify-between">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <p className="text-zinc-700 dark:text-zinc-200 text-2xl font-semibold">PromptVision</p>
        </Link>
        <NavigationAuth session={session} />
      </div>
    </div>
  );
};

export default Navbar;
