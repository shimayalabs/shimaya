import { services } from "./home-data";
import styles from "./services-section.module.scss";

export function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Expertise</span>
          <h2 className={styles.title}>
            Precision engineering for modern platforms
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.title}
              className={service.dark ? styles.cardDark : styles.card}
            >
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined" aria-hidden>
                  {service.icon}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
