import React, { useState, useEffect, Suspense } from "react";
import { SideBar } from "../nav/SideBar";
import { Heading } from "../nav/Heading";
import { ScrollTop } from "../buttons/ScrollTop";
import Starfield from "./background/Starfield";
import styles from "./home.module.scss";
import Loader from '../utils/Loader'; // Assume you have a Loader component

// Lazy load the components
const Wow = React.lazy(() => import("./wow/Wow"));
const Photo = React.lazy(() => import("./photo/photo"));
const About = React.lazy(() => import("./about/About"));
const Projects = React.lazy(() => import("./projects/Projects"));
const Contact = React.lazy(() => import("./contact/Contact"));

export const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <Starfield />
        <SideBar />
        <main>
          <Heading />
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
