import React from 'react';
import AboutSection from '../components/AboutSection';
import styles from '../styles/AboutSection.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <AboutSection />
        </div>
    );
};

export default AboutPage;