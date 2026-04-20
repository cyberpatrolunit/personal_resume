import React from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./intro.module.scss";

const focusAreas = [
  "AI & Emerging Tech Integration",
  "Experience Architecture",
  "Rapid Prototyping",
  "Cross-Functional Leadership",
];

export const Intro = () => {
  return (
    <section className={`section-wrapper ${styles.section}`} aria-label="Site introduction">
      <Reveal width="100%">
        <div className={styles.panel}>
          <p className={styles.kicker}>What You&apos;re Looking At</p>
          <div className={styles.content}>
            <div>
              <h2 className={styles.title}>
                <span className={styles.titleIntro}>A curated selection:</span>
                <span className={styles.titleMain}>
                  immersive systems, live experiences, and strategic technology work.
                </span>
              </h2>
            </div>
            <div className={styles.copyBlock}>
              <p className={styles.copy}>
                Bryant Place is a creative technologist, innovation strategist, and
                experiential systems architect with 13+ years of leadership at the
                intersection of immersive technology, digital innovation, and brand
                storytelling.
              </p>
              <p className={styles.copy}>
                The work below is a focused portfolio of projects that translate
                ambitious concepts into high-impact real-world experiences through
                emerging technology, technical direction, and cross-functional delivery.
              </p>
            </div>
          </div>
          <ul className={styles.tags} aria-label="Key focus areas">
            {focusAreas.map((area) => (
              <li key={area} className={styles.tag}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default Intro;
