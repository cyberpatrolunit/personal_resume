import React, { useEffect, useState } from 'react';
import styles from "./wow.module.scss";
const capabilityPairs = [
  ["Extended Reality", "Real-World Integration"],
  ["Creative Vision", "Technical Execution"],
  ["Interactive Art", "Systems Architecture"],
  ["Design Innovation", "Engineering Precision"],
  ["Software Development", "Hardware Solutions"],
  ["Digital Storytelling", "Logical Algorithms"],
  ["Creative Coding", "Structured Programming"],
];

const Wow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % capabilityPairs.length);
    }, 1450);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {capabilityPairs.map(([primary, secondary], index) => {
        const isActive = index === activeIndex;

        return (
          <h1
            key={primary}
            className={`${styles.text} ${isActive ? styles.active : ""}`}
          >
            {primary}
            <span className={styles.textSpan}>{secondary}</span>
          </h1>
        );
      })}
    </div>
  );
};

export default Wow;
