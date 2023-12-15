import { useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";

export const DotGrid = () => {
  const GRID_WIDTH = 10;
  const GRID_HEIGHT = 10;

  const animateDots = (startIndex) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 50 },
        { value: 1, easing: "easeInOutQuad", duration: 200 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 50 },
        { value: 1, easing: "easeInOutQuad", duration: 200 },
      ],
      opacity: [
        { value: 1.7, easing: "easeOutSine", duration: 50 },
        { value: 0.35, easing: "easeInOutQuad", duration: 200 },
      ],
      delay: anime.stagger(20, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: startIndex,
      }),
    });
  };

  useEffect(() => {
    animateDots(0); // Start animation from the first dot by default
  }, []);

  const handleDotClick = (e) => {
    const startIndex = parseInt(e.target.dataset.index);
    animateDots(startIndex);
    // Your click handler code here
  };

  const dots = [];

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
