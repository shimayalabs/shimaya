"use client";

import Image from "next/image";
import { projects } from "./home-data";

type Props = {
  scrollTo: (id: string) => void;
};

export function WorkSection({ scrollTo: _scrollTo }: Props) {
  return (
    <section id="work" className="py-24 bg-surface">
      <div className="max-w-full mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-4">
            Selected Case Studies
          </h2>
          <p className="text-on-surface-variant max-w-xl">
            Proven results across enterprise libraries and high-traffic storefronts.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group ${idx === 0 ? "lg:col-span-8" : "lg:col-span-4"}`}
            >
              <div className="relative h-[450px] rounded-3xl overflow-hidden bg-surface-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    idx === 0
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 1024px) 100vw, 33vw"
                  }
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} flex flex-col justify-end ${idx === 0 ? "p-10" : "p-8"}`}
                >
                  {idx === 0 ? (
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold font-headline text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 max-w-md">{project.description}</p>
                      </div>
                      <div className="text-right ml-6 shrink-0">
                        <span className="text-4xl font-extrabold text-white">
                          {project.metricValue}
                        </span>
                        <p className="text-white/60 text-xs uppercase">{project.metricLabel}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-primary-fixed font-bold tracking-widest text-xs uppercase mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold font-headline text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-6">{project.description}</p>
                      <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full w-fit">
                        <span className="material-symbols-outlined text-white text-sm">bolt</span>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">
                          {project.metric}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
