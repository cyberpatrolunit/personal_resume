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
                <span>👋</span>My name is Bryant Place, a creative technologist, innovation strategist, and 
                experiential systems architect with 13+ years of leadership at the intersection of immersive 
                technology, digital innovation, and brand storytelling. I translate ambitious creative concepts 
                into real-time systems, interactive installations, and digital experiences that connect audiences 
                to meaningful moments.
              </p>

              <h2 className={styles.subHeading}>Career Overview</h2>
              <p className={styles.aboutText}>
                My work combines technical execution with strategic creative leadership: AI-driven workflows, 
                generative art systems, LIDAR sensing, real-time data architecture, projection mapping, spatial 
                computing, and custom software/hardware ecosystems. I have led cross-functional teams across 
                architecture, AV integration, creative direction, development, and production to deliver complex 
                experiences for global brands and cultural institutions.
              </p>

              <h2 className={styles.subHeading}>Recent Leadership</h2>
              <p className={styles.aboutText}>
                <strong>Google Gradient Canopy / Artists and Machine Intelligence:</strong> Technical Producer 
                for a $15M AI-focused exhibition, leading integration across generative art, LIDAR sensors, 
                real-time CMS architecture, AV teams, architects, and creative stakeholders.
              </p>
              <p className={styles.aboutText}>
                <strong>Downstream:</strong> Technical Director of Real-Time Systems and Innovation, architecting 
                digital wayfinding and scheduling display systems for Google Pier 57 and St. John&apos;s Terminal while 
                managing real-time developers, Git workflows, hardware procurement, and client-facing deployments.
              </p>
              <p className={styles.aboutText}>
                <strong>CPU Productions LLC:</strong> Founder and Experience Innovation Director, delivering 
                experiential activations for Nike, Salesforce, Adriatique, and other global partners through 
                rapid prototyping, creative direction, immersive software, and custom hardware systems.
              </p>

              <h2 className={styles.subHeading}>Project Highlights</h2>
              <p className={styles.aboutText}>
                At <strong>dotdotdash.io</strong>, I served as Lead Technical Director and Project Architect for 
                Amazon, Hyundai, Segment, and The North Face, aligning technology strategy with brand storytelling 
                and audience engagement goals.
              </p>
              <p className={styles.aboutText}>
                <strong>Obscura Digital / MSG Sphere:</strong> Senior Interactive Art Engineer for 20+ major 
                events and R&D initiatives, including MSG Sphere technology showcases, Dubai Expo 2020, Google I/O, 
                YouTube, and Fiat Lux at the Vatican, which reached 200,000 in-person viewers and millions online.
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
