"use client";

import Image from "next/image";

const employers = [
  { name: "Monotype", sub: "Typography Systems" },
  { name: "Accenture", sub: "Enterprise Solutions" },
  { name: "Publicis Sapient", sub: "Digital Transformation" },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-full mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              The Engineer
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-8">
              Shivangi
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Based in Noida, I am a Senior Frontend Engineer dedicated to the craft of
                high-fidelity web products. My background is built on a foundation of technical
                rigor and creative problem-solving.
              </p>
              <p>Before launching Shimaya, I honed my skills at global industry leaders:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {employers.map((employer) => (
                  <div
                    key={employer.name}
                    className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/10"
                  >
                    <p className="font-bold text-on-surface">{employer.name}</p>
                    <p className="text-xs uppercase tracking-wider opacity-60">{employer.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/about-portrait.jpg"
                alt="Professional portrait of Shivangi"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary-fixed rounded-full -z-10 blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-fixed rounded-full -z-10 blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
