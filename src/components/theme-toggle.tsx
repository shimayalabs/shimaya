"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
    >
      <span
        aria-hidden
        className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white dark:bg-amber-400 dark:text-black"
      >
        {theme === "dark" ? "☾" : "☼"}
      </span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"} mode
      </span>
    </button>
  );
}

