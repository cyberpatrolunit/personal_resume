import React from 'react';
import styles from './photo.module.scss';

export const Photo = () => {
  return (
    <section className={`section-wrapper ${styles.imageSection}`}>
      <div className={styles.imageWrapper}>
        <img 
          src="/profile/profile_photo1.jpg"
          alt="Descriptive Alt Text"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Photo;
