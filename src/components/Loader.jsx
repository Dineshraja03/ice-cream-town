import React, { useState, useEffect } from 'react';
import { FaIceCream } from 'react-icons/fa';
import styles from '../styles/Loader.module.css';

const Loader = ({ minDisplayTime = 5000 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader displays for at least the minDisplayTime (in ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  if (!loading) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.iceCreamCone}>
          <div className={styles.cone}></div>
          <div className={styles.iceCreamIcon}>
            <FaIceCream />
          </div>
          <div className={styles.drip1}></div>
          <div className={styles.drip2}></div>
        </div>
        <p className={styles.loaderText}>Loading Sweetness...</p>
      </div>
    </div>
  );
};

export default Loader;