"use client";

import Image from "next/image";
import { stats } from "./home-data";

type Props = {
  scrollTo: (id: string) => void;
};

export function HeroSection({ scrollTo }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div className="max-w-full mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold tracking-wider uppercase">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Senior Engineering Lead
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
            Websites promote you 24/7.{" "}
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              No employee will do that.
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Leveraging 7+ years of senior frontend experience at global agencies to build
            enterprise-grade performance and architectural excellence for growing businesses.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary-container transition-colors"
            >
              Book a free call ↗
            </button>
            <button
              type="button"
              onClick={() => scrollTo("work")}
              className="px-6 py-3 text-on-surface-variant hover:text-on-surface font-medium transition-colors"
            >
              View work →
            </button>
          </div>
          <div className="flex flex-wrap gap-8 pt-4">
            {stats.map((s, idx) => (
              <div key={s.label} className="flex items-start gap-2">
                <span className="text-4xl font-bold font-headline text-primary">{s.value}</span>
                <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest mt-2">
                  {s.label}
                </span>
                {idx < stats.length - 1 && (
                  <div className="ml-4 hidden h-12 w-px bg-outline-variant/30 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 relative">
            <Image
              src="/images/hero-keyboard.jpg"
              alt="Mechanical keyboard and dual monitor setup showing React code"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 p-6 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/10 max-w-[200px]">
            <p className="text-xs font-semibold text-on-surface-variant italic leading-snug">
              &ldquo;Architecture is not just about how it looks, but how it scales.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
