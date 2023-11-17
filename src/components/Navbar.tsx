import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import NavigationAuth from './NavigationAuth';

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="sticky top-0 inset-x-0 h-fit bg-zinc-100 dark:bg-zinc-900 dark:border-b dark:border-zinc-800 z-[40] py-2 mb-5">
      <div className="h-full flex sm:mx-20 items-center justify-between">
        {/* logo */}
        <div className="flex flex-row text-zinc-700 dark:text-zinc-200 divide-x">
          <Link href="/" className="flex flex-1 items-center justify-center text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">PromptVision</p>
          </Link>
          <div className="flex flex-col flex-1 items-center justify-center text-center px-4">
            <p className="font-semibold text-xs sm:text-sm">Image Creator</p>
            <p className="font-light text-xs">Powered by DALL•E-2 </p>
          </div>
        </div>
        <NavigationAuth session={session} />
      </div>
    </div>
  );
};

export default Navbar;
