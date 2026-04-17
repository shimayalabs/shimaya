"use client";

import { services } from "./home-data";

type Props = {
  scrollTo: (id: string) => void;
};

export function ServicesSection({ scrollTo }: Props) {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-full mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Core Competencies
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight text-on-surface">
              Architectural solutions for the modern web.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="p-10 bg-surface-container-lowest rounded-2xl hover:shadow-2xl transition-shadow duration-500 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors ${service.iconBg}`}
              >
                <span
                  className={`material-symbols-outlined group-hover:text-on-primary ${service.iconColor}`}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container text-on-surface-variant rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
