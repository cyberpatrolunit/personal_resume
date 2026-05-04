"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneField } from "@/components/effects/HalftoneField";
import { ScrambleText } from "@/components/effects/ScrambleText";
import styles from "./WowHero.module.scss";

const lines = [
  { primary: "Creative Direction", secondary: "Technical Execution" },
  { primary: "Experiential Concepts", secondary: "Real-World Systems" },
  { primary: "Public Installations", secondary: "Field-Ready Deployment" },
  { primary: "Cinematic Moments", secondary: "Reliable Infrastructure" },
];

const heroHalftoneColors = ["#f7f4ff", "#d9ebe5", "#edf7f2", "#f9faf6"];

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
    <section className={styles.hero} ref={rootRef} aria-labelledby="hero-title">
      <HalftoneField
        className={styles.halftoneField}
        colors={heroHalftoneColors}
        spacing={17}
        minRadius={0.55}
        maxRadius={8}
        angle={0}
        toneAngle={0}
      />
      <div className="section-shell">
        <p className="section-kicker">Bryant Place</p>
        <ScrambleText
          as="h1"
          id="hero-title"
          className={styles.title}
          duration={1550}
          mode="type-on"
          text="Experiential technology from concept to field-ready systems."
        />
        <div className={styles.lines} aria-label="Core capabilities">
          {lines.map((line, index) => (
            <div className={styles.line} key={line.primary}>
              <ScrambleText
                className={styles.primary}
                delay={index * 220}
                duration={1120}
                mode="type-on"
                text={line.primary}
                viewportAmount={0.72}
                viewportMargin="0px 0px -38% 0px"
              />
              <span className={styles.secondary}>
                <span className={styles.fill} aria-hidden="true" />
                <ScrambleText
                  className={styles.secondaryText}
                  delay={120 + index * 220}
                  duration={1240}
                  mode="type-on"
                  text={line.secondary}
                  viewportAmount={0.72}
                  viewportMargin="0px 0px -38% 0px"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
