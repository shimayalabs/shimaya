"use client";

import styles from "./nav.module.scss";
import { useCalendly } from "@/components/ui/calendly-modal";

type Props = {
  scrollTo: (id: string) => void;
};

const navLinks = [
  { label: "Services", id: "services" },
  // { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  // { label: "Pricing", id: "pricing" },
  // { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export function HomeNav({ scrollTo }: Props) {
  const openCalendly = useCalendly();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <button
          type="button"
          onClick={() => scrollTo("top")}
          className={styles.logo}
        >
          Shimaya Labs
        </button>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={styles.link}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button type="button" onClick={openCalendly} className={styles.cta}>
          Book a Call
        </button>
      </div>
    </nav>
  );
}
