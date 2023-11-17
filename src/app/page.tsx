import ImageGallery from '@/components/ImageGallery';
import PromptInput from '@/components/PromptInput';
import ThemeSelect from '@/components/ThemeSelect';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 pb-12">
      <header className="text-5xl italic font-bold text-zinc-800 dark:text-zinc-200">PromptVision</header>
      <ThemeSelect />
      <PromptInput />
      <ImageGallery />
    </main>
  );
}
