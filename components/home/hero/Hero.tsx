import React from 'react';
import { Reveal } from "@/components/utils/Reveal";
import ReactTypingEffect from 'react-typing-effect';
import styles from "./hero.module.scss";

// Lazy load the Icon and OutlineButton components
const Icon = React.lazy(() => import("./Icon"));
const OutlineButton = React.lazy(() => import("../../buttons/OutlineButton"));

const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            🖤 I&apos;m Bryant<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <span>
              <ReactTypingEffect
                text={["Creative Technologist.", "Creative Director.", "Artist.", "Developer.", "3D Printing Specialist.", "Engineer.", "Drone Specialist."]}
                speed={40}
                eraseSpeed={40}
                eraseDelay={900}
                typingDelay={300}
              />
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            In the realm where art and innovation converge, 
            I stand as the architect transforming visionary 
            concepts into interactive tapestries for the 
            digital age.
            <br />
          </p>
        </Reveal>
        <Reveal>
          <React.Suspense fallback={<div>Loading...</div>}>
            <OutlineButton onClick={() => document.getElementById("contact")?.scrollIntoView()}>
              Let&apos;s Talk!
            </OutlineButton>
          </React.Suspense>
        </Reveal>
      </div>
      <React.Suspense fallback={<div>Loading Icon...</div>}>
        <Icon />
      </React.Suspense>
    </section>
  );
};

export default Hero;
