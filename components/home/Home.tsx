import React, { useState, useEffect, useRef, Suspense } from "react";
import { SideBar } from "../nav/SideBar";
import { Heading } from "../nav/Heading";
import { ScrollTop } from "../buttons/ScrollTop";
import { Application } from '@splinetool/runtime';
import styles from "./home.module.scss";

// Lazy load the components
const Wow = React.lazy(() => import("./wow/Wow"));
const Photo = React.lazy(() => import("./photo/photo"));
const About = React.lazy(() => import("./about/About"));
const Projects = React.lazy(() => import("./projects/Projects"));
const Contact = React.lazy(() => import("./contact/Contact"));

export const Home = () => {
  const canvasRef = useRef(null);
  const [showWow, setShowWow] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/qQGEiViy9RKI4ueL/scene.splinecode');
    }

    const loadComponentsSequentially = () => {
      setTimeout(() => setShowWow(true), 1000); // Load Wow after 1 second
      setTimeout(() => setShowProjects(true), 2000); // Then load Projects after another 1 second
      setTimeout(() => setShowPhoto(true), 3000); // And so on...
      setTimeout(() => setShowAbout(true), 4000);
      setTimeout(() => setShowContact(true), 5000);
    };

    loadComponentsSequentially();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
          <Suspense fallback={<div className={styles.loadingText}>Loading...</div>}>
            {showWow && <Wow />}
            {showProjects && <Projects />}
            {showPhoto && <Photo />}
            {showAbout && <About />}
            {showContact && <Contact />}
            <ScrollTop />
            <div style={{ height: "100px", background: "linear-gradient(180deg, var(--background), var(--background-dark))" }}></div>
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Home;
