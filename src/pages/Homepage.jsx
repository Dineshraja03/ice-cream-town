import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularItemsGrid from '../components/PopularItemsGrid';
import HomeCollage from '../components/HomeCollage';
import Products from '../components/Products';
import styles from '../styles/Homepage.module.css';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <HeroSection />
            <PopularItemsGrid />
            <HomeCollage />
            <Products/>
        </div>
    );
};

export default Homepage;