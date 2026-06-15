import Image from "next/image";
import styles from "./testimonials-section.module.scss";

const metrics = [
  { value: "98%", label: "Client Retention" },
  { value: "24h", label: "Response Time" },
  { value: "15+", label: "Global Awards" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden />
              Client Success
            </div>
            <h2 className={styles.headline}>
              Trusted by the next{" "}
              <br />
              <span className={styles.headlineAccent}>Unicorns</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.stars} aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`material-symbols-outlined ${styles.starIcon}`}
                  aria-hidden
                >
                  star
                </span>
              ))}
            </div>
            <span className={styles.verifiedLabel}>Verified by 50+ Global Partners</span>
          </div>
        </div>

        <div className={styles.bentoGrid}>
          <div className={styles.bentoRow}>
            {/* Featured testimonial */}
            <article className={styles.cardFeatured}>
              <span
                className={`material-symbols-outlined ${styles.cardFeaturedQuoteIcon}`}
                aria-hidden
              >
                format_quote
              </span>
              <blockquote className={styles.blockquoteLarge}>
                &ldquo;The UI/UX design is world-class. We&apos;ve seen a{" "}
                <span className={styles.blockquoteAccent}>40% increase</span>{" "}in user retention
                since the redesign. Truly a premium engineering partner.&rdquo;
              </blockquote>
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzRvRroMl9xuQSJhFC88Gg_x4Wx-J-GgF7kI7vbygUKp57uKZth_qfIfc3bDNjP5PV8cdw3w8dvGNtG2Tks-WbCvEzqX_3POkhzpp5EUsKUVrSBJxQ_bYQjchJEzpC4PrffUXx1rn3ELzXdK_om4Mfwp8mouk7Xyu4g0beWky8mHMHQwRMgSs6gm7GWr7x_gH9QOAKtRPrfj4SiTmuWI95yQimrNfof03eLD72Fiy-rfK8XNEgYqDhnq2upik2xWRvK0h9KsxRhdw"
                    alt="Sarah Jenkins"
                    width={64}
                    height={64}
                    unoptimized
                  />
                </div>
                <div>
                  <div className={styles.authorName}>Sarah Jenkins</div>
                  <div className={styles.authorTitle}>Product Lead · Velox</div>
                </div>
              </div>
            </article>

            {/* Secondary testimonial */}
            <article className={styles.cardSecondary}>
              <blockquote className={styles.blockquoteSmall}>
                &ldquo;Shimaya Labs didn&apos;t just build our app; they built our business.
                Their technical insight into AI automation saved us months of R&amp;D.&rdquo;
              </blockquote>
              <div className={styles.authorRow}>
                <div className={styles.avatarSmall}>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdQwFCnAfH-pxpSc6otdvi7fDEMEqYieYYipklHN0_xQTnfdnqkw3gNwyDLsE8IFuiKZrDL6OIf5oMIk-98vODjbqT5KFqi3w3ulP5yF8oXMhbwuRWiTXj9iXp7c6jDhD7Fp_M0V7k6AWxtV6UzEDeFduo-Pty-Z1MfK6G-WkfC7ucTd7Zm7k4uANly_mQA-aP9Bw2dHgkTL-Ko2GfVGQ3wgRPZHS8T8hV0PkI61PqJ7vfaviNi4ArQb6CJAak6uzA69mWhAV-9_U"
                    alt="Marcus Chen"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <div>
                  <div className={styles.authorNameLight}>Marcus Chen</div>
                  <div className={styles.authorTitleLight}>CEO · Nexus Finance</div>
                </div>
              </div>
            </article>
          </div>

          {/* Wide testimonial */}
          <div className={styles.bentoRow}>
            <article className={styles.cardWide}>
              <blockquote className={styles.blockquoteWide}>
                &ldquo;Highly recommended for enterprise-grade SaaS. Their ability to manage
                complex integrations is unmatched.&rdquo;
              </blockquote>
              <div className={styles.authorRowReverse}>
                <div>
                  <div className={styles.authorName}>David Roth</div>
                  <div className={styles.authorTitle}>CTO · Aura Cloud</div>
                </div>
                <div className={styles.avatarFallback} aria-label="David Roth">
                  DR
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.metricsBar}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <div className={styles.metricValue}>{m.value}</div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
