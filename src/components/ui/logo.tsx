import { useId } from "react";
import styles from "./logo.module.scss";

type Props = {
  className?: string;
};

/**
 * Shimaya Labs logo: a gradient tile holding an "S" drawn as a circuit
 * trace (with a node at each end), followed by the wordmark.
 *
 * Sizes from the parent's font-size (the mark is 1.15em), so set
 * `font-size` on the wrapper to scale the whole lockup. Colours follow
 * `currentColor` for "Shimaya" and `--logo-accent` for "Labs", so the same
 * component works on light and dark backgrounds.
 */
export function Logo({ className }: Props) {
  // Unique gradient id per instance (header + footer render it together).
  const gradientId = `logo-gradient-${useId().replace(/:/g, "")}`;

  return (
    <span className={className ? `${styles.logo} ${className}` : styles.logo}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0070eb" />
            <stop offset="1" stopColor="#3323cc" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
        <path
          d="M21 9.5h-7.25a3.25 3.25 0 0 0 0 6.5h4.5a3.25 3.25 0 0 1 0 6.5H11"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21.5" cy="9.5" r="2.25" fill="#ffffff" />
        <circle cx="10.5" cy="22.5" r="2.25" fill="#ffffff" />
      </svg>
      <span className={styles.wordmark}>
        Shimaya <em>Labs</em>
      </span>
    </span>
  );
}
