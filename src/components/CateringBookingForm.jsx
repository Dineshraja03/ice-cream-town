import React, { useState, useRef } from 'react';
import { 
  FaUser, 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaInfoCircle, 
  FaWhatsapp,
  FaGlassCheers,
  FaUtensils
} from 'react-icons/fa';
import styles from '../styles/BookingForm.module.css';

const CateringBookingForm = () => {
    // WhatsApp number - fixed format without the "+" sign
    const whatsappNumber = "919087677680"; // Country code without +

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventType: '',
        eventPlace: '',
        eventDate: '',
        eventTime: '',
        cateringRequirements: ''
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
            case 'eventType':
                if (!value) error = 'Event type is required';
                break;
            case 'eventPlace':
                if (!value) error = 'Event place is required';
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

        // Validate all required fields
        Object.keys(formData).forEach((key) => {
            if (key !== 'cateringRequirements') {  // Catering requirements field is optional
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
                
                // Create a message for WhatsApp
                const messageText = `🍽️ Catering Booking Request\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Place:* ${formData.eventPlace}\n*Date:* ${formattedDate}\n*Time:* ${formData.eventTime}\n*Catering Requirements:* ${formData.cateringRequirements || "None specified"}`;
    
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
                        eventType: '',
                        eventPlace: '',
                        eventDate: '',
                        eventTime: '',
                        cateringRequirements: ''
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
            <h2 className={styles.title}>Book Catering Service</h2>
            <p className={styles.subtitle}>Fill in the details below to book our catering services for your event.</p>
            
            {submitSuccess && (
                <div className={styles.successMessage}>
                    <FaInfoCircle /> Thank you for your catering request! Opening WhatsApp...
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
                    <label htmlFor="eventType">
                        <FaGlassCheers className={styles.icon} /> Type of Event
                    </label>
                    <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                    >
                        <option value="">Select event type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Family Function">Family Function</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.eventType && <p className={styles.error}>{errors.eventType}</p>}
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="eventPlace">
                        <FaMapMarkerAlt className={styles.icon} /> Event Place
                    </label>
                    <input
                        type="text"
                        id="eventPlace"
                        name="eventPlace"
                        value={formData.eventPlace}
                        onChange={handleChange}
                        placeholder="Enter event location"
                    />
                    {errors.eventPlace && <p className={styles.error}>{errors.eventPlace}</p>}
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
                    <label htmlFor="cateringRequirements">
                        <FaUtensils className={styles.icon} /> Catering Requirements (Optional)
                    </label>
                    <textarea
                        id="cateringRequirements"
                        name="cateringRequirements"
                        value={formData.cateringRequirements}
                        onChange={handleChange}
                        placeholder="Specify your catering needs (Welcome drink, Ice cream, Beeda, Fruit salad, Tea shop setup, Cotton candy, Grand buffet, etc.)"
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className={`${styles.submitButton} ${styles.whatsappButton}`} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : (
                        <>
                            <FaWhatsapp className={styles.whatsappIcon} /> Request Catering via WhatsApp
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default CateringBookingForm;