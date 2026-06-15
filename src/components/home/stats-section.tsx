import styles from "./stats-section.module.scss";

const stats = [
  { value: "120+", label: "Products Delivered", icon: "inventory_2" },
  { value: "5M+", label: "Users Supported", icon: "groups" },
  { value: "99.95%", label: "Uptime", icon: "bolt" },
  { value: "40%", label: "Faster Delivery", icon: "speed" },
];

const features = [
  {
    icon: "architecture",
    title: "Architecture First",
    text: "Scalable foundations designed for long-term stability and performance.",
  },
  {
    icon: "neurology",
    title: "AI-Native Development",
    text: "Leveraging LLMs and automation to accelerate delivery without compromising quality.",
  },
  {
    icon: "handshake",
    title: "Transparent Partnership",
    text: "Direct communication and shared goals for a seamless extension of your team.",
  },
];

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.statsCol}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span
                  className={`material-symbols-outlined ${styles.statCardIcon}`}
                  aria-hidden
                >
                  {stat.icon}
                </span>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.copyCol}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>Why Shimaya Labs</span>
              <h2 className={styles.title}>
                Engineering at the speed of thought.
              </h2>
              <p className={styles.body}>
                We combine enterprise-grade engineering standards with the agility of a
                high-growth startup. Our approach ensures your technical debt stays low while
                your velocity stays high.
              </p>
            </div>

            <div className={styles.features}>
              {features.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <span
                    className={`material-symbols-outlined ${styles.featureIcon}`}
                    aria-hidden
                  >
                    {f.icon}
                  </span>
                  <div>
                    <p className={styles.featureTitle}>{f.title}</p>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
