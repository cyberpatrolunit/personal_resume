"use client";

import { ElementType, useEffect, useRef, useState } from "react";
import {
  createPartialScrambleFrame,
  createScrambleFrame,
  createTypeOnScrambleFrame,
  createWaveScrambleIndexes,
} from "./scrambleFrame";

const AMBIENT_NUMBERS = "0123456789";

interface ScrambleTextProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  text: string;
  trigger?: "mount" | "view";
  mode?: "reveal" | "type-on";
  ambient?: boolean;
  reserveSpace?: boolean;
  viewportAmount?: number;
  viewportMargin?: string;
  id?: string;
}

export function ScrambleText({
  ambient = false,
  as: Component = "span",
  className,
  delay = 0,
  duration = 820,
  id,
  mode = "reveal",
  reserveSpace = false,
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
    let ambientFrame = 0;
    let ambientTimeout = 0;
    const createFrame = mode === "type-on" ? createTypeOnScrambleFrame : createScrambleFrame;
    const selectableIndexes = Array.from(text)
      .map((character, index) => (/\s/.test(character) ? -1 : index))
      .filter((index) => index >= 0);

    const scheduleAmbient = () => {
      if (!ambient || selectableIndexes.length === 0) {
        return;
      }

      const delayUntilNext = 2400 + Math.random() * 2600;
      ambientTimeout = window.setTimeout(() => {
        const ambientStart = performance.now();
        const ambientDuration = 680;
        const animateAmbient = (timestamp: number) => {
          const elapsed = timestamp - ambientStart;

          if (elapsed >= ambientDuration) {
            setDisplayText(text);
            scheduleAmbient();
            return;
          }

          const waveStep = Math.floor((elapsed / ambientDuration) * selectableIndexes.length);
          const indexes = createWaveScrambleIndexes(text, waveStep, 2);
          setDisplayText(createPartialScrambleFrame(text, indexes, Math.random, AMBIENT_NUMBERS));
          ambientFrame = window.requestAnimationFrame(animateAmbient);
        };

        ambientFrame = window.requestAnimationFrame(animateAmbient);
      }, delayUntilNext);
    };

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
      scheduleAmbient();
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
      window.cancelAnimationFrame(ambientFrame);
      window.clearTimeout(ambientTimeout);
      observer?.disconnect();
    };
  }, [ambient, delay, duration, mode, text, trigger, viewportAmount, viewportMargin]);

  if (reserveSpace) {
    return (
      <Component ref={elementRef} id={id} className={className} aria-label={text}>
        <span aria-hidden="true" style={{ visibility: "hidden" }}>
          {text}
        </span>
        <span aria-hidden="true" style={{ position: "absolute", inset: 0, padding: "inherit" }}>
          {displayText}
        </span>
      </Component>
    );
  }

  return (
    <Component ref={elementRef} id={id} className={className} aria-label={text}>
      {displayText}
    </Component>
  );
}
