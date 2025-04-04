import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularItemsGrid from '../components/PopularItemsGrid';
import CTAButton from '../components/CTAButton';
import styles from '../styles/Homepage.module.css';
import Products from '../components/Products';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <HeroSection />
            <PopularItemsGrid />
            <Products/>
           
        </div>
    );
};

export default Homepage;