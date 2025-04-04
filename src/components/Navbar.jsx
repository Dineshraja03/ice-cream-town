import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Scoop Logo" className={styles.logo} />
                </div>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/order" onClick={toggleMenu}>Order Online</Link></li>
                    <li><Link to="/celebration-booking" onClick={toggleMenu}>Party Booking</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                </ul>
                <div className={styles.overlayTitle}>Om Thiru Deena</div>
                <div className={styles.menuButton} onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
            {/* Add the SVG for the curve */}
            <div className={styles.curve}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320" /* Ensure the viewBox covers the full width */
                    preserveAspectRatio="none" /* Allow the SVG to stretch */
                >
                    <path
                        fill="#ff6f61"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Navbar;