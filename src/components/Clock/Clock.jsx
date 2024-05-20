import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); 
  }, []);

  return (
    <div className={styles.clockContainer}>
      <div className={styles.time}>
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
