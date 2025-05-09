import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';
import { 
  FaHome, 
  FaInfoCircle, 
  FaImages, 
  FaShoppingCart, 
  FaUtensils, 
  FaBirthdayCake, 
  FaPhoneAlt, 
  FaBars, 
  FaTimes,
  FaIceCream
} from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", text: "Home", icon: <FaHome /> },
        { path: "/about", text: "About Us", icon: <FaInfoCircle /> },
        { path: "/gallery", text: "Gallery", icon: <FaImages /> },
        { path: "/order", text: "Order Online", icon: <FaShoppingCart /> },
        { path: "/catering", text: "Catering", icon: <FaUtensils /> },
        { path: "/celebration-booking", text: "Party Booking", icon: <FaBirthdayCake /> },
        { path: "/contact", text: "Contact Us", icon: <FaPhoneAlt /> }
    ];

    return (
        <div className={styles.navbarWrapper}>
            <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
                <Link to="/" className={styles.logoContainer}>
                    <img src={logo} alt="Ice Cream Town Logo" className={styles.logo} />
                </Link>
                
                {/* <div className={styles.brandHighlight}>
                    <FaIceCream className={styles.brandIcon} />
                    <span className={styles.brandName}>Ice Cream Town</span>
                </div> */}
                
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className={location.pathname === item.path ? styles.activeLink : ''}>
                            <Link 
                                to={item.path} 
                                onClick={toggleMenu}
                                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                            >
                                <span className={styles.navIcon}>{item.icon}</span>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <div className={styles.overlayTitle}>Om Thiru Deena </div>
                
                <div className={styles.menuButton} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
            
            {/* Curve SVG */}
            <div className={styles.curve}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f600af"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Navbar;