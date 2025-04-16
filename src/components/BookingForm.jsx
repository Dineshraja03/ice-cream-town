import React, { useState, useRef } from 'react';
import { FaUser, FaPhoneAlt, FaCalendarAlt, FaUsers, FaClock, FaMapMarkerAlt, FaInfoCircle, FaWhatsapp, FaBirthdayCake } from 'react-icons/fa';
import styles from '../styles/BookingForm.module.css';

const BookingForm = () => {
    // WhatsApp number - fixed format without the "+" sign
    const whatsappNumber = "919087677680"; // Country code without +

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventDate: '',
        eventTime: '',
        partySize: '',
        location: '',
        specialRequirements: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const form = useRef();

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value) error = 'Name is required';
                break;
            case 'phone':
                if (!value) error = 'Phone number is required';
                else if (!/^\d{10}$/.test(value)) error = 'Please enter a valid 10-digit phone number';
                break;
            case 'eventDate':
                if (!value) error = 'Event date is required';
                else {
                    const today = new Date().setHours(0, 0, 0, 0);
                    const selectedDate = new Date(value).setHours(0, 0, 0, 0);
                    if (selectedDate < today) error = 'Event date cannot be in the past';
                }
                break;
            case 'eventTime':
                if (!value) error = 'Event time is required';
                break;
            case 'partySize':
                if (!value) error = 'Party size is required';
                break;
            case 'location':
                if (!value) error = 'Location is required';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        // Validate all fields
        Object.keys(formData).forEach((key) => {
            if (key !== 'specialRequirements') {  // Special requirements field is optional
                const error = validateField(key, formData[key]);
                if (error) {
                    newErrors[key] = error;
                    isValid = false;
                }
            }
        });

        setErrors(newErrors);

        if (isValid) {
            setIsSubmitting(true);
            
            try {
                // Format date for better readability
                const formattedDate = new Date(formData.eventDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                // Create a simpler message (WhatsApp has character limits)
                const messageText = `🎉 New Booking Request\n\n *Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formattedDate}\n*Time:* ${formData.eventTime}\n*Party Size:* ${formData.partySize}\n*Location:* ${formData.location}\n*Special Requirements:* ${formData.specialRequirements || "None"}`;
    
                // Encode the message for URL
                const encodedMessage = encodeURIComponent(messageText);
                
                // Create WhatsApp URL
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                
                // Show success message
                setSubmitSuccess(true);
                
                // Open WhatsApp immediately
                window.open(whatsappURL, '_blank');
                
                // Reset form
                setTimeout(() => {
                    setFormData({
                        name: '',
                        phone: '',
                        eventDate: '',
                        eventTime: '',
                        partySize: '',
                        location: '',
                        specialRequirements: ''
                    });
                    
                    setIsSubmitting(false);
                    // Reset success message after a delay
                    setTimeout(() => setSubmitSuccess(false), 3000);
                }, 1000);
                
            } catch (error) {
                console.error("Error opening WhatsApp:", error);
                alert("There was an issue connecting to WhatsApp. Please try again or contact us directly.");
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Book Your Celebration</h2>
            <p className={styles.subtitle}>Fill in the details below to book your celebration event.</p>
            
            {submitSuccess && (
                <div className={styles.successMessage}>
                    <FaInfoCircle /> Thank you for your booking request! Opening WhatsApp...
                </div>
            )}
            
            <form ref={form} className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                    <label htmlFor="name">
                        <FaUser className={styles.icon} /> Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="phone">
                        <FaPhoneAlt className={styles.icon} /> Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="eventDate">
                        <FaCalendarAlt className={styles.icon} /> Event Date
                    </label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.eventDate && <p className={styles.error}>{errors.eventDate}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="eventTime">
                        <FaClock className={styles.icon} /> Event Time
                    </label>
                    <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                    />
                    {errors.eventTime && <p className={styles.error}>{errors.eventTime}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="partySize">
                        <FaUsers className={styles.icon} /> Party Size
                    </label>
                    <select
                        id="partySize"
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleChange}
                    >
                        <option value="">Select party size</option>
                        <option value="1-10">1-10 people</option>
                        <option value="11-20">11-20 people</option>
                        <option value="21-50">21-50 people</option>
                        <option value="51-100">51-100 people</option>
                        <option value="100+">More than 100 people</option>
                    </select>
                    {errors.partySize && <p className={styles.error}>{errors.partySize}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="location">
                        <FaBirthdayCake className={styles.icon} /> Event name
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Eg: Birthday Party, Wedding, etc."
                    />
                    {errors.location && <p className={styles.error}>{errors.location}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="specialRequirements">
                        <FaInfoCircle className={styles.icon} /> Special Requirements (Optional)
                    </label>
                    <textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        placeholder="Enter any special requirements"
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className={`${styles.submitButton} ${styles.whatsappButton}`} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : (
                        <>
                            <FaWhatsapp className={styles.whatsappIcon} /> Book Now via WhatsApp
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;