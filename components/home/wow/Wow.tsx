import React, { useEffect } from 'react';
import styles from "./wow.module.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Wow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray(`.${styles.text}`) as HTMLElement[];

    // Animation for fade in and slide up effect
    const tl = gsap.timeline();
    textElements.forEach((text, index) => {
      tl.from(text, {
        duration: 0.7, // Duration of the fade-in and slide-up effect
        opacity: 0,    // Start from transparent
        y: 30,         // Start 30 pixels down from the original position
        ease: 'power3.out',
        delay: index * 0.05 // Delay each subsequent animation
      }, '-=0.5'); // Overlap between animations
    });

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 15%',
          end: 'center 80%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className={styles.container}>
        <h1 className={styles.text}>CREATIVE VISION<span className={styles.textSpan}>TECHNICAL EXECUTION</span></h1>
        <h1 className={styles.text}>INTERACTIVE ART<span className={styles.textSpan}>SYSTEMS ARCHITECTURE</span></h1>
        <h1 className={styles.text}>VIRTUAL REALITY<span className={styles.textSpan}>REAL-WORLD INTEGRATION</span></h1>
        <h1 className={styles.text}>DESIGN INNOVATION<span className={styles.textSpan}>ENGINEERING PRECISION</span></h1>
        <h1 className={styles.text}>SOFTWARE DEVELOPMENT<span className={styles.textSpan}>HARDWARE SOLUTIONS</span></h1>
        <h1 className={styles.text}>DIGITAL STORYTELLING<span className={styles.textSpan}>LOGICAL ALGORITHMS</span></h1>
        <h1 className={styles.text}>CREATIVE CODING<span className={styles.textSpan}>STRUCTURED PROGRAMMING</span></h1>
    </div>
  );
};

export default Wow;
