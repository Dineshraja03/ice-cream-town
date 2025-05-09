import React from 'react';
import styles from '../styles/OrderButtons.module.css';

const OrderButtons = () => {
    return (
        <div className={styles.orderButtons}>
            <h2 className={styles.title}>Order Now</h2>
            <div className={styles.buttonContainer}>
                <a
                    href="https://www.swiggy.com/city/palani/ice-cream-town-palani-rest1061704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.swiggyButton}`}
                >
                    Order on Swiggy
                </a>
                <a
                    href="https://www.zomato.com/palani/ice-cream-town-palani-locality/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.zomatoButton}`}
                >
                    Order on Zomato
                </a>
                <a
                    href="tel:+919087677680"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.call}`}
                >
                    Call Now
                </a>
            </div>
        </div>
    );
};

export default OrderButtons;