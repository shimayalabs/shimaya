"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import styles from "./calendly-modal.module.scss";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

type CalendlyContextValue = {
  openCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

/** Opens the shared Calendly booking modal. Must be called from within `CalendlyProvider`. */
export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return ctx.openCalendly;
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = useCallback(() => {
    if (!CALENDLY_URL) {
      console.error(
        "NEXT_PUBLIC_CALENDLY_URL is not set — cannot open the Calendly booking modal."
      );
      return;
    }
    setIsOpen(true);
  }, []);

  const closeCalendly = useCallback(() => setIsOpen(false), []);

  // Lock background scroll and allow Escape-to-close while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCalendly();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCalendly]);

  const embedDomain =
    typeof window !== "undefined" ? window.location.hostname : "";
  const iframeSrc = CALENDLY_URL
    ? `${CALENDLY_URL}?embed_domain=${embedDomain}&embed_type=Inline&hide_gdpr_banner=1`
    : undefined;

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}

      {isOpen && iframeSrc && (
        <div
          className={styles.overlay}
          onClick={closeCalendly}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a call"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeCalendly}
              aria-label="Close"
            >
              <span className="material-symbols-outlined" aria-hidden>
                close
              </span>
            </button>
            <iframe
              src={iframeSrc}
              title="Schedule a call with Shimaya Labs"
              className={styles.iframe}
            />
          </div>
        </div>
      )}
    </CalendlyContext.Provider>
  );
}
