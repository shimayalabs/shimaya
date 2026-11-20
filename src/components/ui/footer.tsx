"use client";

import styles from "./footer.module.scss";
import { useCalendly } from "@/components/ui/calendly-modal";
import { Logo } from "@/components/ui/logo";

const studioLinks = [
  { label: "About", href: "#about" },
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

// Same diagonal arrow as Stackave's footer (lucide ArrowUpRight), revealed on hover.
function LinkArrow() {
  return (
    <svg
      className={styles.linkArrow}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function HomeFooter() {
  const openCalendly = useCalendly();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Logo className={styles.logoText} />
            <p className={styles.brandTagline}>
              Engineered intelligence for modern teams. Made with <span role="img" aria-label="love">❤️</span> in India.
            </p>
          </div>

          <div className={styles.linkGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Studio</h4>
              <ul className={styles.linkList}>
                {studioLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <LinkArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Services</h4>
              <ul className={styles.linkList}>
                {serviceLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href}>
                      <span>{link.label}</span>
                      <LinkArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <a href="mailto:shimayalabs@gmail.com">
                    <span>shimayalabs@gmail.com</span>
                    <LinkArrow />
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <button type="button" onClick={openCalendly}>
                    <span>Book a call</span>
                    <LinkArrow />
                  </button>
                </li>
                <li className={styles.linkItem}>
                  <a href="#">
                    <span>Careers</span>
                    <LinkArrow />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Social</h4>
              <ul className={styles.linkList}>
                {socialLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <span>{link.label}</span>
                      <LinkArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Shimaya Labs · All rights reserved
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
