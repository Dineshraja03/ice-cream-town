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
    FaBuilding,
    FaLinkedin,
    FaFacebook,
    FaInstagram
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

// Import team member images (replace with actual team photos)
// import ceoImage from '../assets/team/ceo.jpg';
// import founderImage from '../assets/team/founder.jpg';
// import cofounderImage from '../assets/team/cofounder.jpg';
// import managerImage from '../assets/team/manager.jpg';
// import staff1Image from '../assets/team/staff1.jpg';
// import staff2Image from '../assets/team/staff2.jpg';
// import staff3Image from '../assets/team/staff3.jpg';
// import staff4Image from '../assets/team/staff4.jpg';
import pic from '../assets/images/product2.png'

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

    // Team members data
    const teamMembers = [
        {
            name: "Thiru deena",
            role: "CEO",
            image: pic,
            description: "Leading the company with vision and innovation.",
            social: {
                linkedin: "https://linkedin.com/",
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "founder",
            role: "Founder",
            image: pic,
            description: "Started the company with a passion for quality ice cream.",
            social: {
                linkedin: "https://linkedin.com/",
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "co-founder",
            role: "Co-Founder",
            image: pic,
            description: "Managing operations and product development.",
            social: {
                linkedin: "https://linkedin.com/",
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "management",
            role: "Management",
            image: pic,
            description: "Overseeing day-to-day operations and team coordination.",
            social: {
                linkedin: "https://linkedin.com/",
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "staff",
            role: "staff",
            image: pic,
            description: "Creating innovative ice cream flavors and desserts.",
            social: {
                linkedin: "https://linkedin.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "staff",
            role: "staff",
            image: pic,
            description: "Ensuring excellent customer service and experience.",
            social: {
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "staff",
            role: "staff",
            image: pic,
            description: "Promoting our brand and managing social media.",
            social: {
                instagram: "https://instagram.com/"
            }
        },
        {
            name: "staff",
            role: "staff",
            image: pic,
            description: "Maintaining our high standard of quality and taste.",
            social: {
                linkedin: "https://linkedin.com/",
                facebook: "https://facebook.com/"
            }
        }
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

            {/* Team Section - NEW */}
            <div className={styles.teamSection}>
                <h2 className={styles.teamTitle}>Meet Our Team</h2>
                <p className={styles.teamSubtitle}>The passionate people behind our delicious ice creams</p>
                
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamMember}>
                            <div className={styles.memberImageContainer}>
                                <img 
                                    src={member.image} 
                                    alt={`${member.name}, ${member.role}`} 
                                    className={styles.memberImage}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                                <p className={styles.memberDescription}>{member.description}</p>
                                <div className={styles.socialLinks}>
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.social.facebook && (
                                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                            <FaFacebook />
                                        </a>
                                    )}
                                    {member.social.instagram && (
                                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                            <FaInstagram />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
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
        <h3 className={styles.collageTitle}>Ice Cream  Town </h3>
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
            <div className={styles.homegrownSection}>
                <h3 className={styles.homegrownTitle}>HOME GROWN BRAND</h3>
                <p className={styles.homegrownSubtitle}>Over <strong>1000+</strong> Happy Customers</p>
            </div>
        </div>
    );
};

export default AboutSection;
