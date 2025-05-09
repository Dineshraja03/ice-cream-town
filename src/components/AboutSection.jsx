import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/AboutSection.module.css';
import {
    FaIceCream,
    FaPalette,
    FaBirthdayCake,
    FaCookie,
    FaCity,
    FaIndustry,
    FaTheaterMasks,
    FaBuilding
} from 'react-icons/fa';
import videoSrc from '../assets/About.webm';
// Import sample images (replace with your actual image paths)
import collage1 from '../assets/store/1.jpg';
import collage2 from '../assets/store/2.jpg';
import collage3 from '../assets/store/3.jpg';
import collage4 from '../assets/store/4.jpg';
import collage5 from '../assets/store/5.jpg';
import collage6 from '../assets/store/6.jpg';
import collage7 from '../assets/store/7.jpg';
import collage8 from '../assets/store/8.jpg';
import collage9 from '../assets/store/9.jpg';
import collage10 from '../assets/store/10.jpg';
import collage11 from '../assets/store/11.jpg';
import collage12 from '../assets/store/12.jpg';
import collage13 from '../assets/store/13.jpg';
import collage14 from '../assets/store/14.jpg';
import collage15 from '../assets/store/15.jpg';

const AboutSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const cardRefs = useRef([]);
    const videoRef = useRef(null);
    const [userInteracted, setUserInteracted] = useState(false);

    const specialties = [
        {
            name: '15 Years of Experience',
            description: 'Delivering quality ice creams for over 15 years.',
            icon: <FaIceCream className={styles.icon} />,
        },
        {
            name: 'Own Manufacturing',
            description: 'State-of-the-art manufacturing facilities.',
            icon: <FaIndustry className={styles.icon} />,
        },
        {
            name: '50+ Supplies in Cities',
            description: 'Supplying to over 50 cities and growing.',
            icon: <FaCity className={styles.icon} />,
        },
        {
            name: 'Theatre Partnerships',
            description: 'Supplying to theatres across the region.',
            icon: <FaTheaterMasks className={styles.icon} />,
        },
        {
            name: 'Dealership',
            description:'Top Branded Dealership in palani',
            icon: <FaBuilding className={styles.cardIcon} />,

        },
    ];

    const cards = [
        {
            title: 'Freshly made ice creams',
            icon: <FaIceCream className={styles.cardIcon} />,
        },
        {
            title: 'Wide variety of flavors',
            icon: <FaPalette className={styles.cardIcon} />,
        },
        {
            title: 'Custom party orders',
            icon: <FaBirthdayCake className={styles.cardIcon} />,
        },
        {
            title: 'Delicious desserts',
            icon: <FaCookie className={styles.cardIcon} />,
        },
        
    ];

    // Collage images data
    const collageImages = [
        { src: collage8, alt: "Ice Cream", size: "large" },
        { src: collage2, alt: "Ice Cream", size: "small" },
        { src: collage3, alt: "Jigarthanda", size: "small" },
        { src: collage4, alt: "Milkshake", size: "medium" },
        { src: collage5, alt: "Rose Milk", size: "large" },
        { src: collage6, alt: "Sundae", size: "small" },
        { src: collage7, alt: "Ice Cream", size: "small" },
        { src: collage1, alt: "Fresh Juice", size: "medium" },
        { src: collage9, alt: "Ice Cream", size: "small" },
        { src: collage10, alt: "Ice Cream", size: "small" },
        { src: collage11, alt: "Ice Cream", size: "medium" },
        { src: collage12, alt: "Ice Cream", size: "large" },
        { src: collage13, alt: "Ice Cream", size: "medium" },
        { src: collage14, alt: "Ice Cream", size: "medium" },
        { src: collage15, alt: "Ice Cream", size: "large" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCard(entry.target.dataset.index);
                }
            });
        }, observerOptions);

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    const handleUserInteraction = () => {
        if (videoRef.current && !userInteracted) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1;
            videoRef.current.play();
            setUserInteracted(true);
        }
    };

    return (
        <div className={styles.container} onClick={handleUserInteraction}>
            {/* About Us Content */}
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.description}>
                        Welcome to Scoop Ice Cream Town! We are passionate about crafting the finest ice creams and desserts to bring sweet moments to your life. Our specialties include a wide variety of flavors, made with love and the freshest ingredients.
                    </p>
                </div>

                <div className={styles.videoContent}>
                    <video
                        className={styles.video}
                        ref={videoRef}
                        autoPlay
                        unmuted
                        playsInline
                        loop
                        // preload="auto"
                        // controls
                    >
                        <source src={videoSrc} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    {!userInteracted && (
                        <div className={styles.tapToUnmute}></div>
                    )}
                </div>
            </div>

            {/* Cards Section */}
            <div className={styles.cardsSection}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        data-index={index}
                        className={`${styles.card} ${
                            activeCard == index ? styles.cardHover : ''
                        }`}
                    >
                        <div className={styles.cardIconContainer}>{card.icon}</div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                ))}
            </div>

            {/* Specialties Section */}
            <div className={styles.specialties}>
                {specialties.map((specialty, index) => (
                    <div key={index} className={styles.specialty}>
                        <div className={styles.iconContainer}>{specialty.icon}</div>
                        <h3 className={styles.specialtyName}>{specialty.name}</h3>
                        <p className={styles.specialtyDescription}>{specialty.description}</p>
                    </div>
                ))}
            </div>

            {/* Image Collage Section */}
            <div className={styles.collageSection}>
                <h3 className={styles.collageTitle}>Ice Cream Town</h3>
                <div className={styles.collageContainer}>
                    {collageImages.map((image, index) => (
                        <div key={index} className={`${styles.collageItem} ${styles[image.size]}`}>
                            <img src={image.src} alt={image.alt} />
                            <div className={styles.overlay}>
                                <p>{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Homegrown Indian Brand Section */}
            
        </div>
    );
};

export default AboutSection;
