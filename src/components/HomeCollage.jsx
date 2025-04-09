import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomeCollage.module.css';
import collage8 from '../assets/store/8.jpg';
import collage12 from '../assets/store/12.jpg';
import collage1 from '../assets/store/1.jpg';
import collage5 from '../assets/store/5.jpg';

const HomeCollage = () => {
    const collageImages = [
        { src: collage8},
        { src: collage12 },
        { src: collage1 },
        { src: collage5 },
    ];

    return (
        <div className={styles.homeCollageSection}>
            <h2 className={styles.collageTitle}>Ice Cream Town Gallery</h2>
            <div className={styles.collageContainer}>
                {collageImages.map((image, index) => (
                    <div key={index} className={styles.collageItem}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        <div className={styles.overlay}>
                            <p>{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/about" className={styles.viewMoreButton}>
                View Gallery
            </Link>
        </div>
    );
};

export default HomeCollage;