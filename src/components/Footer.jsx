import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            {/* Curve Effect */}
            <div className={styles.curve}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f9f9f9"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>

            {/* Footer Content */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.about}>
                        <h3>About Us</h3>
                        <p>
                            Welcome to Scoop Ice Cream Town! We bring sweet moments to life with our
                            delicious ice creams and desserts. Visit us or order online to indulge in
                            happiness.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/order">Order Online</a></li>
                            <li><a href="/celebration-booking">Party Booking</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <h3>Follow Us</h3>
                        <div className={styles.socialIcons}>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.icon}
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/icecream_town?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.icon}
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.icon}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.icon}
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2025 Ice Cream Town. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;