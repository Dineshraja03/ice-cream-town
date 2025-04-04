import React from 'react';
import styles from '../styles/GoogleMapEmbed.module.css';

const GoogleMapEmbed = () => {
    return (
        <div className={styles.mapContainer}>
            <iframe
                title="Ice Cream Parlour Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.337033321682!2d77.53047302997567!3d10.444187301168775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df7a6a7fb2e3%3A0xfd5d94ad97a2bf99!2sIcecream%20Town!5e1!3m2!1sen!2sin!4v1743742658378!5m2!1sen!2sin"
                className={styles.map}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            <div className={styles.mapOverlay}>
                <a
                    href="https://maps.app.goo.gl/8PZv9ov37Ejwkqps6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapButton}
                >
                    Open in Google Maps
                </a>
            </div>
        </div>
    );
};

export default GoogleMapEmbed;