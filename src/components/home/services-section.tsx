import { services } from "./home-data";
import styles from "./services-section.module.scss";

const cardColors: { dark: boolean; pattern: string }[] = [
  {
    // 01 AI Solutions — dot grid
    dark: false,
    pattern: "radial-gradient(circle, rgba(0,88,188,0.087) 1.5px, transparent 1.5px) 0 0 / 20px 20px",
  },
  {
    // 02 Web Development — square grid lines
    dark: false,
    pattern: [
      "linear-gradient(rgba(0,88,188,0.087) 1px, transparent 1px) 0 0 / 24px 24px",
      "linear-gradient(90deg, rgba(0,88,188,0.087) 1px, transparent 1px) 0 0 / 24px 24px",
    ].join(", "),
  },
  {
    // 03 SaaS Platforms — diagonal stripes 45°
    dark: false,
    pattern: "repeating-linear-gradient(45deg, rgba(51,35,204,0.065) 0px, rgba(51,35,204,0.065) 1px, transparent 1px, transparent 14px)",
  },
  {
    // 04 Automation — larger dots
    dark: false,
    pattern: "radial-gradient(circle, rgba(0,88,188,0.108) 2px, transparent 2px) 0 0 / 28px 28px",
  },
  {
    // 05 UI/UX Design — crosshatch (H + V lines)
    dark: false,
    pattern: [
      "repeating-linear-gradient(0deg, rgba(51,35,204,0.065) 0px, rgba(51,35,204,0.065) 1px, transparent 1px, transparent 18px)",
      "repeating-linear-gradient(90deg, rgba(51,35,204,0.065) 0px, rgba(51,35,204,0.065) 1px, transparent 1px, transparent 18px)",
    ].join(", "),
  },
  {
    // 06 Strategy — diagonal crosshatch (45° + 135°)
    dark: false,
    pattern: [
      "repeating-linear-gradient(45deg, rgba(0,88,188,0.065) 0px, rgba(0,88,188,0.065) 1px, transparent 1px, transparent 16px)",
      "repeating-linear-gradient(-45deg, rgba(0,88,188,0.065) 0px, rgba(0,88,188,0.065) 1px, transparent 1px, transparent 16px)",
    ].join(", "),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Expertise</span>
          <h2 className={styles.title}>
            Precision engineering<br />for modern platforms
          </h2>
          <p className={styles.subtitle}>
            We partner with ambitious companies to build scalable software
            systems, intelligent workflows, and digital products that drive
            real business impact.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const { pattern, dark } = cardColors[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={service.title}
                className={dark ? styles.cardDark : styles.card}
                style={{ "--card-pattern": pattern } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <div className={dark ? styles.iconWrapDark : styles.iconWrap}>
                    <span className="material-symbols-outlined" aria-hidden>
                      {service.icon}
                    </span>
                  </div>
                  <span className={dark ? styles.numDark : styles.num}>{num}</span>
                </div>
                <h3 className={dark ? styles.cardTitleDark : styles.cardTitle}>
                  {service.title}
                </h3>
                <p className={dark ? styles.cardDescDark : styles.cardDesc}>
                  {service.description}
                </p>
                <ul className={dark ? styles.featuresDark : styles.features}>
                  {service.features.slice(0, 3).map((feat) => (
                    <li key={feat} className={styles.feat}>
                      <span
                        className={`material-symbols-outlined ${dark ? styles.featIconDark : styles.featIcon}`}
                        aria-hidden
                      >
                        arrow_right
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
