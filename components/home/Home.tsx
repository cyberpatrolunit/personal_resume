import React, { useEffect, useRef } from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { ScrollTop } from "../buttons/ScrollTop";
import { Application } from '@splinetool/runtime'; // Import Splinetool Application

export const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Create a ref for the canvas element

  useEffect(() => {
    // This code will run when the component mounts
    const canvas = canvasRef.current; // Access the canvas element from the ref
    if (canvas) {
      const app = new Application(canvas); // Use the canvas element of type HTMLCanvasElement
      app.load('https://prod.spline.design/qQGEiViy9RKI4ueL/scene.splinecode');
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ScrollTop />
          <div
            style={{
              height: "100px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          >
          </div>
        </main>
      </div>
    </>
  );
};
