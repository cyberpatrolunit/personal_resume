"use client";

import { ElementType, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollWordRevealProps {
  as?: ElementType;
  className?: string;
  text: string;
}

export function ScrollWordReveal({ as: Component = "span", className, text }: ScrollWordRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(element.querySelectorAll("[data-word]"), { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll("[data-word]"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            end: "top 54%",
            scrub: true,
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, [text]);

  return (
    <Component ref={elementRef} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span data-word="" aria-hidden="true" key={`${word}-${index}`}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Component>
  );
}
