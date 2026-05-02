"use client";

import { ElementType, useEffect, useRef, useState } from "react";
import { createScrambleFrame } from "./scrambleFrame";

interface ScrambleTextProps {
  as?: ElementType;
  className?: string;
  duration?: number;
  text: string;
  trigger?: "mount" | "view";
  id?: string;
}

export function ScrambleText({
  as: Component = "span",
  className,
  duration = 820,
  id,
  text,
  trigger = "view",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reducedMotion) {
      setDisplayText(text);
      return;
    }

    let frame = 0;
    let startTime = 0;
    let observer: IntersectionObserver | null = null;
    let hasPlayed = false;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(1, (timestamp - startTime) / duration);
      setDisplayText(createScrambleFrame(text, progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
        return;
      }

      setDisplayText(text);
    };

    const play = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;
      setDisplayText(createScrambleFrame(text, 0));
      frame = window.requestAnimationFrame(animate);
    };

    if (trigger === "mount") {
      play();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            play();
            observer?.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      observer.observe(element);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [duration, text, trigger]);

  return (
    <Component ref={elementRef} id={id} className={className} aria-label={text}>
      {displayText}
    </Component>
  );
}
