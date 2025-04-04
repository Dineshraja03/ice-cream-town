import React from 'react';
import styles from '../styles/CTAButton.module.css';

const CTAButton = () => {
    return (
        <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>Order Online</button>
        </div>
    );
};

export default CTAButton;