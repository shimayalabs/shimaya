"use client";

import { ServicesSection } from "@/components/home/services-section";
import { WorkSection } from "@/components/home/work-section";
import { AboutSection } from "@/components/home/about-section";
import { HomeNav } from "@/components/ui/nav";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ContactSection } from "@/components/home/contact-section";
import { HomeFooter } from "@/components/ui/footer";

export function HomeClient() {
  const scrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface">
      <div className="mx-auto flex flex-col bg-transparent">
        <HomeNav scrollTo={scrollTo} />
        <main id="top">
          <HeroSection scrollTo={scrollTo} />
          <ServicesSection scrollTo={scrollTo} />
          <WorkSection scrollTo={scrollTo} />
          <ProcessSection />
          <AboutSection />
          <ContactSection />
        </main>
        <HomeFooter />
      </div>
    </div>
  );
}
