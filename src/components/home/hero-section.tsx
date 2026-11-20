"use client";

import styles from "./hero-section.module.scss";
import { useCalendly } from "@/components/ui/calendly-modal";
import { stats } from "./stats-section";

const techCategories = [
  {
    label: "Frontend",
    color: "#0070eb",
    techs: ["NextJs", "ReactJs", "VueJs", "TypeScript", "SCSS"],
  },
  {
    label: "Backend",
    color: "#6366f1",
    techs: ["NodeJs", "NestJS", "PostgreSQL", "GraphQL"],
  },
  {
    label: "Cloud",
    color: "#06b6d4",
    techs: ["AWS", "GCP", "Azure"],
  },
  {
    label: "AI",
    color: "#f59e0b",
    techs: ["OpenAI", "Claude", "Gemini"],
  },
];

const allTechs = techCategories.flatMap((cat) =>
  cat.techs.map((tech) => ({ name: tech, color: cat.color }))
);
// Same figures as the stats section, so the two never disagree.
const heroStats = stats.slice(0, 3);

// Per-element index for the staggered fade-up on load.
const reveal = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function HeroSection() {
  const openCalendly = useCalendly();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section} id="top">
      <div className={styles.meshGradient} aria-hidden />
      <div className={styles.heroGrid} aria-hidden />
      <div className={styles.glow} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`${styles.badge} ${styles.reveal}`} style={reveal(0)}>
            <span className={styles.badgeDot} aria-hidden />
            Now booking new projects
          </span>

          <h1 className={`${styles.headline} ${styles.reveal}`} style={reveal(1)}>
            <span className={styles.headlineLine}>Building Intelligent Digital</span>{" "}
            <span className={styles.headlineLine}>
              Products &amp; <span className={styles.headlineAccent}>AI Experiences</span>
            </span>
          </h1>

          <p className={`${styles.subtext} ${styles.reveal}`} style={reveal(2)}>
            Empowering high-growth startups and enterprises with sophisticated AI automation,
            scalable infrastructure, and precision-engineered digital products.
          </p>

          <div className={`${styles.actions} ${styles.reveal}`} style={reveal(3)}>
            <button type="button" onClick={openCalendly} className={styles.btnPrimary}>
              Book a Strategy Call
              <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden>
                arrow_outward
              </span>
            </button>
            <button type="button" onClick={scrollToServices} className={styles.btnSecondary}>
              Explore Services
              <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden>
                arrow_outward
              </span>
            </button>
          </div>

          <dl className={`${styles.proof} ${styles.reveal}`} style={reveal(4)}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.proofItem}>
                <dt className={styles.proofLabel}>{stat.label}</dt>
                <dd className={styles.proofValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Full-width marquee - lives outside the content container */}
      <div className={`${styles.techStack} ${styles.reveal}`} style={reveal(5)}>
        <span className={styles.techStackLabel}>Technologies We Engineer With</span>

        <div className={styles.marqueeWrapper} aria-hidden>
          {/* Row 1 - scrolls left */}
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {[...allTechs, ...allTechs].map((tech, i) => (
                <span key={i} className={styles.techChip}>
                  <span className={styles.techDot} style={{ background: tech.color }} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
