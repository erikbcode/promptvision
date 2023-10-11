import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PromptVision',
  description: 'Created with Next.js 13, OpenAI, TailwindCSS, and more.',
};

export default function RootLayout({ children, authModal }: { children: React.ReactNode; authModal: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen ${inter.className} bg-zinc-50 dark:bg-zinc-900`}>
        <Providers>
          <ToastContainer />
          <Navbar />
          {authModal}
          {children}
        </Providers>
      </body>
    </html>
  );
}
