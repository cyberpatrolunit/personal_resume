import React from 'react';
import styles from './photo.module.scss';
import { Reveal } from '@/components/utils/Reveal';

export const Photo = () => {
  return (
    <section className={`section-wrapper ${styles.imageSection}`}>
        <div className={styles.imageWrapper}>
          <img 
            src="/profile/profile_photo2.jpg"
            alt="There should be a photo of Bryant here :)"
            className={styles.image}
          />
        </div>
    </section>
  );
};

export default Photo;
