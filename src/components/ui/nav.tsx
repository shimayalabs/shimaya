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
const whatsappHref = "https://wa.me/919871719955";

// The mobile drawer has room for a fuller menu than the desktop bar.
const mobileLinks = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
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

// WhatsApp brand mark (Material Symbols has no brand icons).
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.icon}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
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
      className={[
        styles.nav,
        scrolled && styles.scrolled,
        mobileOpen && styles.menuOpen,
      ]
        .filter(Boolean)
        .join(" ")}
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
        <div className={styles.mobileBanner}>
          <span className={styles.mobileBannerBadge}>
            <span className={styles.mobileBannerDot} aria-hidden />
            Now booking new projects
          </span>
          <p className={styles.mobileBannerTitle}>
            Have an idea? Let&apos;s build it together.
          </p>
          <p className={styles.mobileBannerText}>
            AI products, SaaS platforms &amp; web experiences - engineered to scale.
          </p>
          <div className={styles.mobileBannerActions}>
            <a
              href={phone.href}
              className={styles.mobileBannerPrimary}
              aria-label={`Let's talk - call ${phone.label}`}
            >
              <Icon name="call" size={16} />
              Let&apos;s talk
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileBannerSecondary}
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </div>

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
                  <span className={styles.mobileLinkLabel}>{link.label}</span>
                  <span className={styles.mobileLinkArrow}>
                    <Icon name="arrow_outward" size={18} />
                  </span>
                </button>
              </li>
            ),
          )}
        </ul>

        <div className={styles.mobileCta} style={stagger(mobileLinks.length + 1)}>
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
