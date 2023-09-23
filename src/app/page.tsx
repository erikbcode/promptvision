import ImageGeneration from "@/components/ImageGeneration";
import ThemeSelect from "@/components/ThemeSelect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <header className="text-5xl italic font-bold">PromptVision</header>
      <ThemeSelect />
      <ImageGeneration />
    </main>
  );
}
