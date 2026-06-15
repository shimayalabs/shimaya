"use client";

import styles from "./hero-section.module.scss";

type Props = {
  scrollTo: (id: string) => void;
};

const techCategories = [
  {
    label: "Frontend",
    color: "#0070eb",
    techs: ["Next.js", "React", "Vue.js", "TypeScript"],
  },
  {
    label: "Backend",
    color: "#6366f1",
    techs: ["Node.js", "NestJS", "PostgreSQL", "GraphQL"],
  },
  {
    label: "Cloud",
    color: "#06b6d4",
    techs: ["AWS", "Docker", "Kubernetes"],
  },
  {
    label: "AI",
    color: "#f59e0b",
    techs: ["OpenAI", "Claude"],
  },
];

const allTechs = techCategories.flatMap((cat) =>
  cat.techs.map((tech) => ({ name: tech, color: cat.color }))
);
const allTechsReversed = [...allTechs].reverse();

export function HeroSection({ scrollTo }: Props) {
  return (
    <section className={styles.section} id="top">
      <div className={styles.meshGradient} aria-hidden />
      <div className={styles.heroGrid} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Building Intelligent Digital
            <br />
            Products &amp; AI Experiences
          </h1>

          <p className={styles.subtext}>
            Empowering high-growth startups and enterprises with sophisticated AI automation,
            scalable infrastructure, and precision-engineered digital products.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className={styles.btnPrimary}
            >
              Book a Strategy Call
              <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden>
                arrow_forward
              </span>
            </button>
            {/* <button
              type="button"
              onClick={() => scrollTo("work")}
              className={styles.btnSecondary}
            >
              View Work
              <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden>
                arrow_outward
              </span>
            </button> */}
          </div>
        </div>
      </div>

      {/* Full-width marquee — lives outside the content container */}
      <div className={styles.techStack}>
        <span className={styles.techStackLabel}>Technologies We Engineer With</span>

        <div className={styles.marqueeWrapper} aria-hidden>
          {/* Row 1 — scrolls left */}
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
