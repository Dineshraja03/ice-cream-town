import React from 'react';
import { 
  FaGlassCheers, 
  FaIceCream, 
  FaLeaf, 
  FaAppleAlt, 
  FaMugHot, 
  FaCandyCane, 
  FaUtensils, 
  FaCamera 
} from 'react-icons/fa';
import styles from '../styles/CateringSection.module.css';

// Import sample images - replace with your actual images
import cateringImg1 from '../assets/logo.png';
// import cateringImg2 from '../assets/catering/catering2.jpg';
// import cateringImg3 from '../assets/catering/catering3.jpg';

const CateringSection = () => {
  const cateringServices = [
    {
      title: "Welcome Drink",
      icon: <FaGlassCheers />,
      description: "Start your event with refreshing welcome drinks to greet your guests."
    },
    {
      title: "Ice Cream",
      icon: <FaIceCream />,
      description: "Our signature ice cream selection served at your special occasion."
    },
    {
      title: "Beeda",
      icon: <FaLeaf />,
      description: "Traditional beeda service for an authentic touch to your event."
    },
    {
      title: "Fruit Salad",
      icon: <FaAppleAlt />,
      description: "Fresh fruit salads made with seasonal fruits for a healthy option."
    },
    {
      title: "Tea Shop Setup",
      icon: <FaMugHot />,
      description: "Complete tea shop setup for serving hot beverages to your guests."
    },
    {
      title: "Cotton Candy",
      icon: <FaCandyCane />,
      description: "Live cotton candy station that's a hit with both kids and adults."
    },
    {
      title: "Grand Buffet Setup",
      icon: <FaUtensils />,
      description: "Elegant buffet arrangements for your events with complete service."
    }
  ];

  // Gallery images - replace with your actual event photos
  const galleryImages = [
    { src: cateringImg1, alt: "Corporate Event Catering" },
    { src: cateringImg1, alt: "Wedding Reception Catering" },
    { src: cateringImg1, alt: "Birthday Party Setup" },
    { src: cateringImg1, alt: "Office Event Service" },
    { src: cateringImg1, alt: "Outdoor Catering" },
    { src: cateringImg1, alt: "School Event Catering" },
  ];

  return (
    <div className={styles.cateringSection}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Our Catering Services</h2>
        <p className={styles.subtitle}>
          Make your events special with our premium catering services
        </p>
      </div>

      {/* Services Grid */}
      <div className={styles.servicesGrid}>
        {cateringServices.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      
      {/* Divider */}
      <div className={styles.divider}>
        <span>EVENT GALLERY</span>
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryHeader}>
        <h3 className={styles.galleryTitle}>
          <FaCamera className={styles.galleryIcon} /> Our Event Highlights
        </h3>
        <p className={styles.gallerySubtitle}>See how we've catered for different occasions</p>
      </div>
      
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div className={styles.galleryItem} key={index}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className={styles.overlay}>
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className={styles.cta}>
        <h3>Ready to make your event special?</h3>
        <p>Contact us to discuss your catering needs</p>
        <a href="/celebration-booking" className={styles.ctaButton}>
          Book Catering Services
        </a>
      </div>
    </div>
  );
};

export default CateringSection;