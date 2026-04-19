import { useEffect, useMemo, useRef, useState } from "react";
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

const STAR_COUNT = 96;

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
