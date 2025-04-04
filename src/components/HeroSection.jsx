import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSection.module.css';
import product1 from '../assets/images/product1.png';
import product2 from '../assets/images/product2.png';
import product3 from '../assets/images/product3.png';
import prouduct4 from '../assets/images/product4.png';
import product5 from '../assets/images/product5.png';

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const products = [product1, product2, product3, prouduct4, product5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 2500); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className={styles.heroSection}>
            <div className={styles.textContent}>
                <h1>Bringing Sweet Moments to Life</h1>
                <p>Discover the finest ice creams and desserts crafted just for you.</p>
                <button className={styles.ctaButton}>Order Now</button>
            </div>
            <div className={styles.carousel}>
                <div className={styles.wheel}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`${styles.carouselItem} ${
                                index === currentIndex ? styles.active : ''
                            }`}
                            style={{
                                transform: `rotate(${index * (360 / products.length)}deg) translateY(-150px)`,
                            }}
                        >
                            <img src={product} alt={`Product ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;