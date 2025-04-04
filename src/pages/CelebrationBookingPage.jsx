import React from 'react';
import BookingForm from '../components/BookingForm';
import EventGallery from '../components/EventGallery';
import styles from '../styles/BookingForm.module.css';
import stylesGallery from '../styles/EventGallery.module.css';

const CelebrationBookingPage = () => {
    return (
        <div className={styles.container}>
         
            <BookingForm />
      
            <EventGallery />
        </div>
    );
};

export default CelebrationBookingPage;