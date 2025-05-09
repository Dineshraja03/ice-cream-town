import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularItemsGrid from '../components/PopularItemsGrid';
import HomeCollage from '../components/HomeCollage';
import TestimonialsSection from '../components/TestimonialsSection';
import Products from '../components/Products';
import styles from '../styles/Homepage.module.css';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <HeroSection />
            <div className={styles.contentSections}>
                <PopularItemsGrid />
                <HomeCollage />
                <TestimonialsSection />
                <Products/>
            </div>
        </div>
    );
};

export default Homepage;