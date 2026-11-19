"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./nav.module.scss";
import { useCalendly } from "@/components/ui/calendly-modal";
import { services, serviceId } from "@/components/home/home-data";

type Props = {
  scrollTo: (id: string) => void;
};

const navLinks = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  // { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  // { label: "Pricing", id: "pricing" },
  // { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

const phone = { label: "+91 9871719955", href: "tel:+919871719955" };
const email = "shimayalabs@gmail.com";

// The mobile drawer has room for a fuller menu than the desktop bar.
const mobileLinks = [
  { label: "Home", id: "top", icon: "home" },
  { label: "Services", id: "services", icon: "widgets" },
  { label: "About", id: "about", icon: "diversity_3" },
  { label: "Process", id: "process", icon: "route" },
  { label: "Testimonials", id: "testimonials", icon: "reviews" },
  { label: "Contact", id: "contact", icon: "mail" },
];

const quickActions = [
  { label: "Call", icon: "call", href: phone.href, external: false },
  { label: "WhatsApp", icon: "chat", href: "https://wa.me/919871719955", external: true },
  { label: "Email", icon: "alternate_email", href: `mailto:${email}`, external: false },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shimayalabs/" },
  { label: "GitHub", href: "https://github.com/shimayalabs" },
];

// Per-item index for the drawer's staggered entrance animation.
const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  return (
    <span
      className={`material-symbols-outlined ${styles.icon}`}
      style={{ fontSize: size }}
      aria-hidden
    >
      {name}
    </span>
  );
}

export function HomeNav({ scrollTo }: Props) {
  const openCalendly = useCalendly();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dismiss the desktop dropdown on outside click or Escape.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  function openServices() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  }

  // Short delay so the pointer can travel from the trigger into the panel.
  function scheduleCloseServices() {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  }

  // Soft shadow once the page has scrolled past the very top.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the mobile panel is open; close it on Escape.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  function go(id: string) {
    setMobileOpen(false);
    setServicesOpen(false);
    scrollTo(id);
  }

  function book() {
    setMobileOpen(false);
    openCalendly();
  }

  return (
    <nav
      className={scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav}
      aria-label="Primary"
    >
      <div className={styles.inner}>
        <button
          type="button"
          onClick={() => go("top")}
          className={styles.logo}
          aria-label="Shimaya Labs home"
        >
          Shimaya <em>Labs</em>
        </button>

        <ul className={styles.links}>
          {navLinks.map((link) =>
            link.id === "services" ? (
              <li
                key={link.id}
                ref={dropdownRef}
                className={styles.dropdownItem}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className={styles.link}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  aria-controls="nav-panel-services"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  {link.label}
                  <span
                    className={servicesOpen ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron}
                  >
                    <Icon name="expand_more" size={18} />
                  </span>
                </button>

                <div
                  id="nav-panel-services"
                  className={servicesOpen ? `${styles.panel} ${styles.panelOpen}` : styles.panel}
                >
                  <p className={styles.groupLabel}>Our Services</p>
                  <ul className={styles.panelGrid}>
                    {services.map((service) => (
                      <li key={service.title}>
                        <button
                          type="button"
                          className={styles.subLink}
                          onClick={() => go(serviceId(service.title))}
                        >
                          <span className={styles.subIcon}>
                            <Icon name={service.icon} size={18} />
                          </span>
                          <span className={styles.subText}>
                            <span className={styles.subTitle}>{service.title}</span>
                            <span className={styles.subDesc}>{service.description}</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={styles.panelFooterLink}
                    onClick={() => go("services")}
                  >
                    View all services
                    <Icon name="arrow_outward" size={16} />
                  </button>
                </div>
              </li>
            ) : (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  className={styles.link}
                >
                  {link.label}
                </button>
              </li>
            ),
          )}
        </ul>

        <div className={styles.cta}>
          <button type="button" onClick={book} className={styles.ctaBtn}>
            <Icon name="calendar_today" size={16} />
            Schedule Consultation
          </button>
        </div>

        <div className={styles.mobileActions}>
          <a
            href={phone.href}
            className={styles.mobileCallIcon}
            aria-label={`Call ${phone.label}`}
          >
            <Icon name="call" size={20} />
          </a>
          <button
            type="button"
            className={styles.mobileToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={
          mobileOpen
            ? `${styles.mobilePanel} ${styles.mobilePanelOpen}`
            : styles.mobilePanel
        }
      >
        <p className={styles.mobileSectionLabel} style={stagger(0)}>
          Menu
        </p>
        <ul className={styles.mobileList}>
          {mobileLinks.map((link, i) =>
            link.id === "services" ? (
              <li key={link.id} className={styles.mobileItem} style={stagger(i + 1)}>
                <button
                  type="button"
                  className={styles.mobileLink}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-panel"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  <span className={styles.mobileLinkIcon}>
                    <Icon name={link.icon} size={20} />
                  </span>
                  <span className={styles.mobileLinkLabel}>{link.label}</span>
                  <span
                    className={
                      mobileServicesOpen
                        ? `${styles.mobileChevron} ${styles.chevronOpen}`
                        : styles.mobileChevron
                    }
                  >
                    <Icon name="expand_more" size={22} />
                  </span>
                </button>
                <div
                  id="mobile-services-panel"
                  className={
                    mobileServicesOpen
                      ? `${styles.mobileSubPanel} ${styles.mobileSubPanelOpen}`
                      : styles.mobileSubPanel
                  }
                >
                  <ul className={styles.mobileSubPanelCard}>
                    {services.map((service) => (
                      <li key={service.title}>
                        <button
                          type="button"
                          className={styles.mobileSubLink}
                          onClick={() => go(serviceId(service.title))}
                        >
                          <Icon name={service.icon} size={18} />
                          {service.title}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        className={`${styles.mobileSubLink} ${styles.mobileSubLinkAll}`}
                        onClick={() => go("services")}
                      >
                        View all services
                        <Icon name="arrow_outward" size={16} />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.id} className={styles.mobileItem} style={stagger(i + 1)}>
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  className={styles.mobileLink}
                >
                  <span className={styles.mobileLinkIcon}>
                    <Icon name={link.icon} size={20} />
                  </span>
                  <span className={styles.mobileLinkLabel}>{link.label}</span>
                  <span className={styles.mobileLinkArrow}>
                    <Icon name="arrow_outward" size={18} />
                  </span>
                </button>
              </li>
            ),
          )}
        </ul>

        <div className={styles.mobileContact} style={stagger(mobileLinks.length + 1)}>
          <p className={styles.mobileSectionLabel}>Get in touch</p>
          <div className={styles.mobileQuickActions}>
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={styles.mobileQuickAction}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.mobileQuickIcon}>
                  <Icon name={action.icon} size={20} />
                </span>
                {action.label}
              </a>
            ))}
          </div>
          <a href={`mailto:${email}`} className={styles.mobileEmail}>
            {email}
          </a>
        </div>

        <div className={styles.mobileCta} style={stagger(mobileLinks.length + 2)}>
          <button type="button" onClick={book} className={styles.mobileCtaBtn}>
            <Icon name="calendar_today" size={16} />
            Schedule Consultation
          </button>
          <p className={styles.mobileCtaNote}>Free 30-min intro call · No commitment</p>
        </div>

        <div className={styles.mobileFooter}>
          <div className={styles.mobileSocials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocial}
              >
                {social.label}
                <Icon name="arrow_outward" size={14} />
              </a>
            ))}
          </div>
          <p className={styles.mobileCopyright}>
            © {new Date().getFullYear()} Shimaya Labs · Made with <span role="img" aria-label="love">❤️</span> in India
          </p>
        </div>
      </div>
    </nav>
  );
}
