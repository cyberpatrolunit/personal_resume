import { capabilities } from "@/data/capabilities";
import styles from "./Capabilities.module.scss";

export function Capabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <div className="section-shell">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">Leadership across concept, system, site, and team.</h2>
        <div className={styles.grid}>
          {capabilities.map((capability) => (
            <article className={styles.card} key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.summary}</p>
              <span>{capability.proof}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
