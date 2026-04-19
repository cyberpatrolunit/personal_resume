import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from "./starfield.module.scss";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  duration: number;
  delay: number;
  tint: "white" | "brand" | "hot";
};

type Meteor = {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
  travel: number;
  length: number;
  shine: number;
};

const STAR_COUNT = 96;
const METEOR_COUNT = 14;

const Starfield = () => {
  const [scrollState, setScrollState] = useState({ scroll: 0, velocity: 0 });
  const lastScroll = useRef(0);
  const frame = useRef<number>();

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: STAR_COUNT }, (_, id) => {
      const isStatic = Math.random() < 0.28;
      const accentRoll = Math.random();

      return {
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isStatic ? 1 + Math.random() * 1.1 : 1 + Math.random() * 2.2,
        speed: isStatic ? 0 : 0.2 + Math.random() * 0.72,
        duration: 2.4 + Math.random() * 4.8,
        delay: Math.random() * 5,
        tint: accentRoll > 0.92 ? "hot" : accentRoll > 0.76 ? "brand" : "white",
      };
    });
  }, []);

  const meteors = useMemo<Meteor[]>(() => {
    return Array.from({ length: METEOR_COUNT }, (_, id) => ({
      id,
      x: 18 + Math.random() * 56,
      y: 16 + Math.random() * 58,
      duration: 2.8 + Math.random() * 0.9,
      delay: 2 + id * 3.8 + Math.random() * 4.5,
      opacity: 0.48 + Math.random() * 0.3,
      travel: 22 + Math.random() * 18,
      length: 7.5 + Math.random() * 5.5,
      shine: 1.8 + Math.random() * 1.4,
    }));
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const currentScroll = window.scrollY || window.pageYOffset;
      const velocity = reduceMotion ? 0 : currentScroll - lastScroll.current;

      lastScroll.current = currentScroll;
      setScrollState({ scroll: currentScroll, velocity });
      frame.current = undefined;
    };

    const onScroll = () => {
      if (frame.current === undefined) {
        frame.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== undefined) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const stretch = Math.max(1, Math.min(1 + Math.abs(scrollState.velocity) * 0.035, 4));

  return (
    <div className={styles.starfield} aria-hidden="true">
      <div className={styles.nebula} />
      <div className={styles.meteorLayer}>
        {meteors.map((meteor) => (
          <span
            key={meteor.id}
            className={styles.meteor}
            style={{
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              "--travel": `${meteor.travel}rem`,
              "--tail": `${meteor.length}rem`,
              "--shine": `${meteor.shine}rem`,
              animationDuration: `${meteor.duration}s`,
              animationDelay: `${meteor.delay}s`,
              opacity: meteor.opacity,
            } as CSSProperties}
          />
        ))}
      </div>
      {stars.map((star) => {
        const y = star.speed === 0
          ? star.y
          : (((star.y - scrollState.scroll * star.speed * 0.045) % 100) + 100) % 100;

        return (
          <span
            key={star.id}
            className={`${styles.star} ${styles[star.tint]}`}
            style={{
              left: `${star.x}%`,
              top: `${y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              transform: `scaleY(${star.speed === 0 ? 1 : stretch})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Starfield;
