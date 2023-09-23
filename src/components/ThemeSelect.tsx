"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full w-10 h-10 flex items-center justify-center"
    >
      {theme === "light" ? (
        <MoonIcon className="w-7 h-7" onClick={() => setTheme("light")} />
      ) : (
        <SunIcon className="w-7 h-7" onClick={() => setTheme("dark")} />
      )}
    </button>
  );
};
export default ThemeSelect;
