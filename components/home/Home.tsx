import React, { useState, useEffect, useRef, Suspense } from "react";
import { SideBar } from "../nav/SideBar";
import { Heading } from "../nav/Heading";
import { ScrollTop } from "../buttons/ScrollTop";
import { Application } from '@splinetool/runtime';
import styles from "./home.module.scss";
import Loader from '../utils/Loader'; // Assume you have a Loader component

// Lazy load the components
const Wow = React.lazy(() => import("./wow/Wow"));
const Photo = React.lazy(() => import("./photo/photo"));
const About = React.lazy(() => import("./about/About"));
const Projects = React.lazy(() => import("./projects/Projects"));
const Contact = React.lazy(() => import("./contact/Contact"));

export const Home = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/qQGEiViy9RKI4ueL/scene.splinecode').then(() => {
        setIsLoaded(true); // Set isLoaded to true when the Spline model is loaded
        // Ensure content is shown after a minimum of 2 seconds
        setTimeout(() => setShowContent(true), 2000);
      });
    }
  }, []);

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
          {showContent ? (
            <Suspense fallback={<Loader />}>
              <Wow />
              <Projects />
              <Photo />
              <About />
              <Contact />
              <ScrollTop />
              <div style={{ height: "100px", background: "linear-gradient(180deg, var(--background), var(--background-dark))" }}></div>
            </Suspense>
          ) : (
            <Loader /> // Display loader for at least 2 seconds
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
