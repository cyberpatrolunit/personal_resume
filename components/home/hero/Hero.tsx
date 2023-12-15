import { Reveal } from "@/components/utils/Reveal";
// import { DotGrid } from "./DotGrid";
import Icon from "./Icon";
import styles from "./hero.module.scss";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Bryant<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span><ReactTypingEffect
              text={["Creative Technologist.", "Creative Director.", "Artist.", "Developer.", "3D Printing Specialist.", "Engineer.", "Drone Specialist."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          In the realm where art and innovation converge, 
          I stand as the architect transforming visionary 
          concepts into interactive tapestries for the 
          digital age.
            <br />
          Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
    <Icon />
    </section>
  );
};
