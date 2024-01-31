import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './slideshow.module.scss';

const Slideshow = ({ imgSrc }) => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const slides = slideshowRef.current.querySelectorAll('.slide');
    const deco = slideshowRef.current.querySelector('.deco');
    
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('slide--current');
      }
    });

    const navigate = (direction) => {
      const currentSlide = slideshowRef.current.querySelector('.slide--current');
      let newIndex = [...slides].indexOf(currentSlide) + direction;
      if (newIndex >= slides.length) newIndex = 0;
      if (newIndex < 0) newIndex = slides.length - 1;

      const newSlide = slides[newIndex];

      // Animation with GSAP
      gsap.timeline()
        .set(newSlide, { autoAlpha: 1 })
        .fromTo(newSlide, { xPercent: 100 * direction }, { xPercent: 0 })
        .fromTo(currentSlide, { xPercent: 0 }, { xPercent: -100 * direction }, 0)
        .set(currentSlide, { autoAlpha: 0 })
        .then(() => {
          currentSlide.classList.remove('slide--current');
          newSlide.classList.add('slide--current');
        });
    };

    // Example: Auto navigate every 3 seconds
    const interval = setInterval(() => navigate(1), 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imgSrc]);

  return (
    <div ref={slideshowRef} className={styles.slides}>
        {imgSrc.map((src, index) => (
    <div className={styles.slide} key={index}>
      <img src={src} className={styles.slide__img} alt={`Slide ${index}`} />
    </div>
  ))}
    <div className={`${styles.deco} ${styles['deco--1']}`}></div> {/* Example usage of deco with modifier */}
    </div>

  );
};

export default Slideshow;
