import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-end py-2">
      <p className="mr-6 text-zinc-400 dark:text-zinc-600">
        Powered by{' '}
        <Link href="https://openai.com/dall-e-2" className="hover:text-zinc-500">
          DALL-E
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
