"use client";

import styles from "./footer.module.scss";

type Props = {
  scrollTo?: (id: string) => void;
};

const studioLinks = [
  { label: "About", href: "#" },
  { label: "Process", href: "#process" },
];

const serviceLinks = [
  { label: "AI Solutions", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "SaaS Platforms", href: "#services" },
  { label: "UI / UX Design", href: "#services" },
  { label: "Automation", href: "#services" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shimayalabs/" },
  { label: "GitHub", href: "https://github.com/shimayalabs" },
];

export function HomeFooter({ scrollTo }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <span className="material-symbols-outlined" aria-hidden>
                  menu
                </span>
              </div>
              <span className={styles.logoText}>
                Shimaya <em>Labs</em>
              </span>
            </div>
            <p className={styles.brandTagline}>
              Engineered intelligence for modern teams. Made in India.
            </p>
          </div>

          <div className={styles.linkGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Studio</h4>
              <ul className={styles.linkList}>
                {studioLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Services</h4>
              <ul className={styles.linkList}>
                {serviceLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <a href="mailto:shimayalabs@gmail.com">shimayalabs@gmail.com</a>
                </li>
                <li className={styles.linkItem}>
                  <button
                    type="button"
                    onClick={() => scrollTo?.("contact")}
                  >
                    Book a call
                  </button>
                </li>
                <li className={styles.linkItem}>
                  <a href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Social</h4>
              <ul className={styles.linkList}>
                {socialLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Shimaya Labs · All rights reserved
          </p>
          <div className={styles.bottomRight}>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>
                Privacy
              </a>
              <a href="#" className={styles.legalLink}>
                Terms
              </a>
              <a href="#" className={styles.legalLink}>
                Security
              </a>
            </div>
            <span className={styles.version}>v 2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
