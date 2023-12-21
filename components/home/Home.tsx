import React, { useState, useEffect, useRef, Suspense } from "react";
import { SideBar } from "../nav/SideBar";
import { Heading } from "../nav/Heading";
import { ScrollTop } from "../buttons/ScrollTop";
import { Application } from '@splinetool/runtime';
import styles from "./home.module.scss";

// Lazy load the components
const Hero = React.lazy(() => import("./hero/Hero"));
const Photo = React.lazy(() => import("./photo/photo"));
const About = React.lazy(() => import("./about/About"));
const Projects = React.lazy(() => import("./projects/Projects"));
const Contact = React.lazy(() => import("./contact/Contact"));

export const Home = () => {
  const canvasRef = useRef(null);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/qQGEiViy9RKI4ueL/scene.splinecode');
    }

    setTimeout(() => {
      setComponentsLoaded(true);
    }, 3000); // Adjust delay as per requirement
  }, []);

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />
          <Suspense fallback={<div className={styles.loadingText}>Loading...</div>}>
            {componentsLoaded && (
              <>
                <Hero />
                <Photo />
                <About />
                <Projects />
                <Contact />
                <ScrollTop />
                <div style={{ height: "100px", background: "linear-gradient(180deg, var(--background), var(--background-dark))" }}></div>
              </>
            )}
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Home;
