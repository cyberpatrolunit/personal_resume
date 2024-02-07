import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && boxRef.current) {
      const element = ref.current;
      const boxElement = boxRef.current;

      gsap.fromTo(element,
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.25,
          ease: "power3.out"
        }
      );

      gsap.fromTo(boxElement,
        { left: 0 },
        {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            toggleActions: "play none none reverse",
          },
          left: "100%",
          duration: 0.95,
          ease: "easeIn"
        }
      );
    }
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      {children}
      <div 
        ref={boxRef}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
