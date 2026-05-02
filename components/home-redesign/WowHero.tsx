"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleText } from "@/components/effects/ScrambleText";
import styles from "./WowHero.module.scss";

const lines = [
  { primary: "Creative Direction", secondary: "Technical Execution" },
  { primary: "Experiential Concepts", secondary: "Real-World Systems" },
  { primary: "Public Installations", secondary: "Field-Ready Deployment" },
  { primary: "Cinematic Moments", secondary: "Reliable Infrastructure" },
];

export function WowHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`.${styles.fill}`).forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              end: "bottom 44%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef} aria-labelledby="hero-title" data-halftone="wow">
      <div className="section-shell">
        <p className="section-kicker">Bryant Place</p>
        <ScrambleText
          as="h1"
          id="hero-title"
          className={styles.title}
          duration={980}
          text="Experiential technology from concept to field-ready systems."
        />
        <div className={styles.lines} aria-label="Core capabilities">
          {lines.map((line) => (
            <div className={styles.line} key={line.primary}>
              <ScrambleText className={styles.primary} duration={680} text={line.primary} />
              <span className={styles.secondary}>
                <span className={styles.fill} aria-hidden="true" />
                <ScrambleText className={styles.secondaryText} duration={760} text={line.secondary} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
