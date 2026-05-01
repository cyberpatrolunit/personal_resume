import styles from "./AboutCredibility.module.scss";

export function AboutCredibility() {
  return (
    <section className={styles.section} id="about">
      <div className="section-shell">
        <p className="section-kicker">About</p>
        <div className={styles.layout}>
          <h2>Creative technologist and technical leader for complex experiential systems.</h2>
          <div className={styles.copy}>
            <p>
              Bryant Place brings 13+ years of global experience across permanent installations, live events,
              interactive systems, and technical direction.
            </p>
            <p>
              His work spans 40+ successful installations and shows for major brands, artists, venues, and institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
