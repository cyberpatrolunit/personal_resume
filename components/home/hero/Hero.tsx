import React, { useState, useEffect } from 'react';
import { Reveal } from "@/components/utils/Reveal";
import ReactTypingEffect from 'react-typing-effect';
import styles from "./hero.module.scss";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Lazy load the Icon and OutlineButton components
const Icon = React.lazy(() => import("./Icon"));
const OutlineButton = React.lazy(() => import("../../buttons/OutlineButton"));

const EmojiCycler = ({ emojis, cycleTime }) => {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEmoji((prevEmoji) => (prevEmoji + 1) % emojis.length);
    }, cycleTime + 1500); // Add transition time to the cycle time

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [emojis.length, cycleTime]);

  return (
    <TransitionGroup component={null}> {/* component={null} renders no extra element */}
      <CSSTransition
        key={emojis[currentEmoji]}
        timeout={500}
        classNames={{
          enter: styles.emojiFadeEnter,
          enterActive: styles.emojiFadeEnterActive,
          exit: styles.emojiFadeExit,
          exitActive: styles.emojiFadeExitActive,
        }}
      >
        <span className={styles.emoji}>{emojis[currentEmoji]}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

const Hero = () => {
  const [loadIcon, setLoadIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadIcon(true);
    }, 3000); // Delay in milliseconds (3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Define your emojis and cycle time here
  const emojis = ["👾", "🚀", "💡", "🎨", "🤖", "🛸", "⛷️", "👋", "🎛️", "🕹️", "📡"];
  const cycleTime = 100; // 2000ms = 2 seconds

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
      <Reveal>
        <h1 className={styles.title}>
          <div className={styles.emojiContainer}> 
            <EmojiCycler emojis={emojis} cycleTime={cycleTime} />
          </div>
        </h1>
      </Reveal>
      <Reveal>
        <h1 className={styles.title}>
          <div>/\/</div>
        </h1>
      </Reveal>
      <Reveal>
        <h1 className={styles.title}>
          <div>/.hola./</div>
        </h1>
      </Reveal>
      <Reveal>
        <h1 className={styles.title}>
          <div>/\/\/</div>
        </h1>
      </Reveal>
      <Reveal>
        <h1 className={styles.title}>
          <div>/.bonjour./</div>
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
    </section>
  );
};

export default Hero;
