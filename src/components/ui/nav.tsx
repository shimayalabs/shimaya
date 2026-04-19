"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type Props = {
  scrollTo: (id: string) => void;
};

export function HomeNav({ scrollTo }: Props) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="max-w-full mx-auto px-8 py-4 flex items-center relative">
        <div className="flex-1 flex justify-start">
        <button
          type="button"
          onClick={() => scrollTo("top")}
          className="text-xl font-bold tracking-tighter text-on-surface font-headline"
        >
          Shimaya
        </button>
        </div>
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 font-headline tracking-tight font-semibold text-xl">
          <button
            type="button"
            onClick={() => scrollTo("services")}
            className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo("work")}
            className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            Work
          </button>
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:bg-primary-container transition-colors"
          >
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
}
