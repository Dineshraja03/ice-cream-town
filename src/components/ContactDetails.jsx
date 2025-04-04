import React from 'react';
import styles from '../styles/ContactDetails.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const ContactDetails = () => {
    return (
        <div className={styles.contactDetails}>
            <h2>Contact Us</h2>
            <div className={styles.contactButtons}>
                <a href="tel:+9629691090" className={styles.button}>
                    <FaPhoneAlt className={styles.icon} />
                    Call Us: +91 9629691090
                </a>
                <a href="tel:+919087677680" className={styles.button}>
                    <FaPhoneAlt className={styles.icon} />
                    Franchise Enquiry: +91 9087677680
                </a>
                <a href="mailto:info@icecreamparlour.com" className={styles.button}>
                    <FaEnvelope className={styles.icon} />
                    Email: info@icecreamparlour.com
                </a>
                <a
                    href="https://maps.app.goo.gl/8PZv9ov37Ejwkqps6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    <FaMapMarkerAlt className={styles.icon} />
                    View on Google Maps
                </a>
                <a
                    href="https://www.instagram.com/icecream_town?igsh=MWtzM2Z4ZHBlNzJkZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    <FaInstagram className={styles.icon} />
                    Follow Us on Instagram
                </a>
            </div>
        </div>
    );
};

export default ContactDetails;