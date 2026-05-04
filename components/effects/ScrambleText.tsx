"use client";

import { ElementType, useEffect, useRef, useState } from "react";
import { createScrambleFrame, createTypeOnScrambleFrame } from "./scrambleFrame";

interface ScrambleTextProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  text: string;
  trigger?: "mount" | "view";
  mode?: "reveal" | "type-on";
  viewportAmount?: number;
  viewportMargin?: string;
  id?: string;
}

export function ScrambleText({
  as: Component = "span",
  className,
  delay = 0,
  duration = 820,
  id,
  mode = "reveal",
  text,
  trigger = "view",
  viewportAmount = 0.35,
  viewportMargin = "0px",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(mode === "type-on" ? "" : text);
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
    const createFrame = mode === "type-on" ? createTypeOnScrambleFrame : createScrambleFrame;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = Math.max(0, timestamp - startTime - delay);
      const progress = Math.min(1, elapsed / duration);
      setDisplayText(createFrame(text, progress));

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
      setDisplayText(createFrame(text, 0));
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
        {
          rootMargin: viewportMargin,
          threshold: viewportAmount,
        },
      );
      observer.observe(element);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [delay, duration, mode, text, trigger, viewportAmount, viewportMargin]);

  return (
    <Component ref={elementRef} id={id} className={className} aria-label={text}>
      {displayText}
    </Component>
  );
}
