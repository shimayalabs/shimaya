"use client";

import { steps } from "./home-data";

export function ProcessSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-full mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-4">
            The Architectural Process
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            A transparent and rigorous approach to building your digital future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-outline-variant/30" />
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="w-16 h-16 bg-surface-container-lowest rounded-full border border-outline-variant/20 flex items-center justify-center mx-auto mb-8 group-hover:border-primary transition-colors">
                <span className="text-xl font-bold font-headline text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-xl font-bold font-headline mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
