"use client";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { HomeNav } from "@/components/ui/nav";
import { HomeFooter } from "@/components/ui/footer";

export function HomeClient() {
  const scrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <HomeNav scrollTo={scrollTo} />
      <main>
        <HeroSection scrollTo={scrollTo} />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
        <CtaSection scrollTo={scrollTo} />
      </main>
      <HomeFooter scrollTo={scrollTo} />
    </>
  );
}
