import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaIceCream, FaChevronUp } from 'react-icons/fa';
import styles from '../styles/FloatingButtons.module.css';

const FloatingButtons = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show buttons after scrolling down a bit
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOrderClick = () => {
        navigate('/order');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.floatingButtonsContainer}>
            <button 
                onClick={scrollToTop}
                className={`${styles.floatingButton} ${styles.topButton}`}
                aria-label="Go to Top"
            >
                <FaChevronUp className={styles.buttonIcon} />
                <span className={styles.buttonText}>Top</span>
            </button>
            
            <a 
                href="tel:+919087677680" 
                className={`${styles.floatingButton} ${styles.callButton}`}
                aria-label="Call Us"
            >
                <FaPhoneAlt className={styles.buttonIcon} />
                <span className={styles.buttonText}>Call</span>
            </a>
            
            <button 
                onClick={handleOrderClick}
                className={`${styles.floatingButton} ${styles.orderButton}`}
                aria-label="Order Now"
            >
                <FaIceCream className={`${styles.buttonIcon} ${styles.iceCreamIcon}`} />
                <span className={styles.buttonText}>Order</span>
            </button>
        </div>
    );
};

export default FloatingButtons;