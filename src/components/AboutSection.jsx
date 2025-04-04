import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/AboutSection.module.css';
import { FaIceCream, FaPalette, FaBirthdayCake, FaCookie } from 'react-icons/fa'; // Importing icons from react-icons
import videoSrc from '../assets/about.mp4'; // Replace with the actual video path
import {  FaCity, FaIndustry, FaTheaterMasks } from 'react-icons/fa'; // Importing icons from react-icons

const AboutSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const cardRefs = useRef([]);

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

    useEffect(() => {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the card is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCard(entry.target.dataset.index);
                }
            });
        }, observerOptions);

        // Observe each card
        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            // Cleanup observer on component unmount
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className={styles.container}>
            {/* Cards Section */}
            

            {/* About Us Content */}
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.description}>
                        Welcome to Scoop Ice Cream Town ! We are passionate about crafting the finest ice creams and desserts to bring sweet moments to your life. Our specialties include a wide variety of flavors, made with love and the freshest ingredients.
                    </p>
                </div>




                
                <div className={styles.videoContent}>
                    <video className={styles.video} 
                        unmuted
                        autoPlay
                        playsInline >
                        <source src={videoSrc} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>



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


            <div className={styles.specialties}>
                {specialties.map((specialty, index) => (
                    <div key={index} className={styles.specialty}>
                        <div className={styles.iconContainer}>{specialty.icon}</div>
                        <h3 className={styles.specialtyName}>{specialty.name}</h3>
                        <p className={styles.specialtyDescription}>{specialty.description}</p>
                    </div>
                ))}
            </div>

            {/* Homegrown Indian Brand Section */}
            <div className={styles.homegrownSection}>
                <h3 className={styles.homegrownTitle}>HOMEGROWN OWN BRAND</h3>
                <p className={styles.homegrownSubtitle}>Over <strong>1000+</strong> Happy Customers</p>
            </div>
        </div>
    );
};

export default AboutSection;