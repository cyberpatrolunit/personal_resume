import React, { Suspense } from 'react';
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";

const Stats = React.lazy(() => import("./Stats"));

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <div>
              <h2 className={styles.subHeading}>Introduction</h2>
              <p className={styles.aboutText}>
                <span>👋</span>My name is Bryant Place, a creative technologist with 13+ years of global experience 
                in the live entertainment and permanent installation industries. My 40+ successful interactive 
                installations and live event shows for leading brands showcase my ability to navigate and solve 
                complex design problems.
              </p>

              <h2 className={styles.subHeading}>Career Overview</h2>
              <p className={styles.aboutText}>
                Throughout my career, I've held various positions of increasing responsibility and team management, 
                including Technical Director of Real-Time Systems, Lead Technical Director and Creative Director, 
                and Senior Interactive Art Engineer. I've played a pivotal role in managing teams and executing a 
                diverse array of projects.
              </p>

              <h2 className={styles.subHeading}>Notable Projects</h2>
              <p className={styles.aboutText}>
                <strong>Google Pier 57 and Google St. John’s Terminal in NYC:</strong> Currently at Downstream, I 
                oversee permanent installations, managing real-time developers and procuring software and hardware.
              </p>
              <p className={styles.aboutText}>
                As an Independent Contractor, I've contributed to projects such as Nike HQ in Portland, OR, and the 
                Salesforce Tower in San Francisco.
              </p>
              <p className={styles.aboutText}>
                At <strong>dotdotdash.io</strong>, I served as Systems Architect for projects like Amazon Prime Video Pop-Bot, Segment's 
                Synapse tech confrence and TheNorthFace Future Light Product Reveal.
              </p>
              <p className={styles.aboutText}>
                <strong>OBSCURA DIGITAL / MSG Sphere:</strong> Supported over 25 client-facing projects, including the 
                Dubai Expo 2020 and Lux Prima Live Show 2019.
              </p>
            </div>
          </Reveal>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Stats />
        </Suspense>
      </div>
    </section>
  );
};

export default About;
