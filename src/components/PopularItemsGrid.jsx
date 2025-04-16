import React, { useState, useEffect } from 'react';
import styles from '../styles/PopularItemsGrid.module.css';
import image1 from '../assets/slider/fresh juice.jpg';
import image2 from '../assets/slider/ice cream.jpg';
import image3 from '../assets/slider/jigarthanda.jpg';
import image4 from '../assets/slider/milkshake.jpg';
import image5 from '../assets/slider/rosemilk.jpg';

const PopularItemsGrid = () => {
    const items = [
        { id: 1, name: 'Fresh juice', image: image1 },
        { id: 2, name: 'Ice Creams', image: image2 },
        { id: 3, name: 'Jigarthanda', image: image3 },
        { id: 4, name: 'Milkshakes', image: image4 },
        { id: 5, name: 'Rosemilk', image: image5 },
    ];

    

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2500); // Slide every 2.5 seconds
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div>
            {/* Image Slider */}
            <div className={styles.carouselContainer}>
                <div
                    className={styles.carousel}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items.map((item) => (
                        <div key={item.id} className={styles.carouselItem}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
                <div className={styles.indicators}>
                    {items.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.indicator} ${
                                index === currentIndex ? styles.active : ''
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default PopularItemsGrid;