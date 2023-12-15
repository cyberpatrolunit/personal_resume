import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Howdy!</span>My name is Bryant CPU Place, and I&apos;m a highly 
              accomplished creative technologist with over 13 years of
experience in the live entertainment and permanent installation industries. I have a strong
track record of effectively leading projects and teams, and have consistently demonstrated an
ability to navigate and solve complex problems, resulting in the successful delivery of
numerous interactive installations and live event shows. Throughout my career, I&apos;ve held various positions of increasing responsibility, including
Technical Director of Real-Time Systems, Lead Technical Director and Creative Director, and
Senior Interactive Art Engineer.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
