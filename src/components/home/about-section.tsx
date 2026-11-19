import styles from "./about-section.module.scss";

const facts = [
  { label: "Based in", value: "India" },
  { label: "Focus", value: "AI & digital products" },
  { label: "We work with", value: "Startups & enterprises" },
];

const principles = [
  {
    icon: "target",
    title: "Outcomes over output",
    text: "We measure success by the business impact we create, not the hours we log or the features we ship.",
  },
  {
    icon: "verified",
    title: "Senior craft, end to end",
    text: "Strategy, design and engineering under one roof, so nothing gets lost between handoffs.",
  },
  {
    icon: "forum",
    title: "Radical transparency",
    text: "Direct access to the people building your product, with clear progress you can see every week.",
  },
  {
    icon: "all_inclusive",
    title: "Built to last",
    text: "Clean, documented, scalable systems your team can own and extend long after launch.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>About Us</span>
            <h2 className={styles.title}>
              A product studio for teams building what&apos;s next.
            </h2>
            <p className={styles.body}>
              Shimaya Labs is an AI and digital engineering studio. We help high-growth
              startups and established enterprises turn ambitious ideas into intelligent,
              production-ready products — from AI solutions and SaaS platforms to web
              experiences and automation.
            </p>
            <p className={styles.body}>
              We work as an extension of your team: small, senior and hands-on. Every
              engagement follows the same disciplined path — discover, design, develop,
              launch — so you always know where your product stands and what comes next.
            </p>

            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className={styles.factLabel}>{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className={styles.principles}>
            {principles.map((p) => (
              <li key={p.title} className={styles.principle}>
                <span className={styles.principleIcon}>
                  <span className="material-symbols-outlined" aria-hidden>
                    {p.icon}
                  </span>
                </span>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleText}>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
