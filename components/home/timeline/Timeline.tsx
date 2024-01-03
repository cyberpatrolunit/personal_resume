import React, { useEffect, useState } from 'react';
import styles from './timeline.module.scss';

interface Event {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div key={index} className={styles.event}>
          <div className={styles.content}>
            <span className={styles.year}>{event.year}</span>
            <h2 className={styles.title}>{event.title}</h2>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;