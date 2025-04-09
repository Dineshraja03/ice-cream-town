import React, { useState } from 'react';
import styles from '../styles/BookingForm.module.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        celebrationType: '',
        guests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the WhatsApp message
        const message = `Hello, I would like to book a celebration. Here are the details:
- Name: ${formData.name}
- Event Date: ${formData.date}
- Type of Celebration: ${formData.celebrationType}
- Number of Guests: ${formData.guests}`;

        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/919087677680?text=${encodedMessage}`;

        // Open the WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.container}>
            <h2>Book Your Celebration</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="date">Event Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="celebrationType">Type of Celebration:</label>
                    <input
                        type="text"
                        id="celebrationType"
                        name="celebrationType"
                        placeholder="e.g., Birthday"
                        value={formData.celebrationType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputField}>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        placeholder="Max: 100 guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className={styles.submitButton} type="submit">
                    Submit Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;