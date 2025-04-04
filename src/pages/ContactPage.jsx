import React from 'react';
import ContactDetails from '../components/ContactDetails';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import styles from '../styles/ContactDetails.module.css';

const ContactPage = () => {
    return (
        <div className={styles.contactPage}>
            <ContactDetails />
            <GoogleMapEmbed />
        </div>
    );
};

export default ContactPage;