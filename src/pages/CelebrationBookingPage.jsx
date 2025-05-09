import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import CateringBookingForm from '../components/CateringBookingForm';
import EventGallery from '../components/EventGallery';
import styles from '../styles/BookingForm.module.css';
import stylesGallery from '../styles/EventGallery.module.css';

const CelebrationBookingPage = () => {
    const location = useLocation();
    const [activeForm, setActiveForm] = useState('celebration');
    
    useEffect(() => {
        // Check if we have a state with activeForm parameter
        if (location.state && location.state.activeForm) {
            setActiveForm(location.state.activeForm);
        }
    }, [location]);

    return (
        <div className={styles.bookingPage}>
            <div className={styles.formToggle}>
                <button 
                    className={`${styles.toggleBtn} ${activeForm === 'celebration' ? styles.active : ''}`}
                    onClick={() => setActiveForm('celebration')}
                >
                    Celebration Booking
                </button>
                <button 
                    className={`${styles.toggleBtn} ${activeForm === 'catering' ? styles.active : ''}`}
                    onClick={() => setActiveForm('catering')}
                >
                    Catering Service
                </button>
            </div>
            
            <div className={styles.formContainer}>
                {activeForm === 'celebration' ? (
                    <BookingForm />
                ) : (
                    <CateringBookingForm />
                )}
            </div>
            
            <EventGallery />
        </div>
    );
};

export default CelebrationBookingPage;