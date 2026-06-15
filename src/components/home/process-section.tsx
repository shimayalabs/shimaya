import { steps } from "./home-data";
import styles from "./process-section.module.scss";

export function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Framework</span>
          <h2 className={styles.title}>The path to excellence</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.connectorLine} aria-hidden />
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={i === 2 ? styles.stepCircleDark : styles.stepCircle}>
                <span className="material-symbols-outlined" aria-hidden>
                  {step.icon}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
