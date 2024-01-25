import React, { useRef } from 'react'; // Import useRef here
import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  const lineRef = useRef(null); // Now useRef should be recognized

  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div ref={lineRef} className={styles.line} />
      <h3>
        <Reveal lineRef={lineRef}>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};

export default SectionHeader;
