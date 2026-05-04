import { HalftoneField } from "@/components/effects/HalftoneField";
import styles from "./AboutCredibility.module.scss";

const aboutHalftoneColors = ["#fbf3ef", "#f4f8f2", "#ffffff", "#e9f5f0"];

export function AboutCredibility() {
  return (
    <section className={styles.section} id="about">
      <HalftoneField
        className={styles.halftoneField}
        colors={aboutHalftoneColors}
        spacing={22}
        minRadius={0.6}
        maxRadius={8}
        angle={7}
        toneAngle={155}
      />
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
