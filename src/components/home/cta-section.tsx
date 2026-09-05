import styles from "./cta-section.module.scss";
import { useCalendly } from "@/components/ui/calendly-modal";

const checklist = [
  "A one-page read on scope, risks & shape",
  "A fixed-fee proposal — no hourly games",
  "Three reference clients you can call",
  "A start date within four weeks",
];

export function CtaSection() {
  const openCalendly = useCalendly();

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.gridOverlay} aria-hidden />
        <div className={styles.glowCenter} aria-hidden />
        <div className={styles.glowCorner} aria-hidden />

        <div className={styles.inner}>
          <div className={styles.leftCol}>
            <div className={styles.bookingBadge}>
              <span className={styles.bookingDot} aria-hidden />
              now booking · Q3 2026
            </div>

            <h2 className={styles.headline}>
              Have a quiet idea?{" "}
              <br />
              <span className={styles.headlineAccent}>Let&apos;s make it real.</span>
            </h2>

            <p className={styles.body}>
              Tell us what you&apos;re building. We&apos;ll come back inside 24 hours with a
              sharp read on whether we&apos;re the right team — and what the first six weeks
              could look like.
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={openCalendly}
                className={styles.btnPrimary}
              >
                Book a 30-min intro
                <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden>
                  arrow_forward
                </span>
              </button>
              <a href="mailto:shimayalabs@gmail.com" className={styles.btnSecondary}>
                shimayalabs@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.cardLabel}>What you get back</p>
            <ul className={styles.checklist}>
              {checklist.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <div className={styles.checkIcon}>
                    <span className="material-symbols-outlined" aria-hidden>
                      check
                    </span>
                  </div>
                  <span className={styles.checkText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
