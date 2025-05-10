import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import styles from '../styles/TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const isTransitioning = useRef(false);
  const autoplayTimerRef = useRef(null);
  const touchStartRef = useRef(0);
  const touchMoveRef = useRef(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Kumaresh Sivakumar",
      role: "Customer",
      text: "I visited this coffee shop yesterday and had an exceptional experience! The barista was friendly, the coffee was expertly brewed, and the ambiance was cozy. I had everything I needed, so I couldn't have asked for more. Bravo, gentlemen! Keep producing delicious cakes and coffee!",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXd4FsL9QOv77ISZPDn4D4KwM7Cg8d5N_I4S2pK8jH8UggaUIA=w99-h99-p-rp-mo-br100",
      time: "1 month ago"
    },
    {
      id: 2,
      name: "Mohammed Nizas",
      role: "Customer",
      text: "There is a good atmosphere. And it's very nice to visit with family and friends to enjoy. And the way of handling the customer is also very nice.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocLxzH3UqfZPr1qZYUTQj7bElUw6nOICRG_F3Onrsd4izRft0g=w99-h99-p-rp-mo-br100",
      time: "3 months ago"
    },
    {
      id: 3,
      name: "Sheik Haarish",
      role: "Customer",
      text: "It was a wonderful occasion. We enjoy a lot. Everything is extraordinary. Owners of the shop were good 👍🏻. Overall everything is very good.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXtG3m3My-N6XNeVmlL8wky1-9ISF0h5gyHkAHwp2XXeUP4vQ--=w99-h99-p-rp-mo-br100",
      time: "1 month ago"
    },
    {
      id: 4,
      name: "Goudamaraja",
      role: "Customer",
      text: "Very nice ambience and good place to celebrate birthday, wedding anniversary etc.. very peaceful and good place to have time with friends, families. Much recommended.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocJLLvFNA7F9pefPgRhw-6B0472v0Y1YjVPtmVBDkBqUp7cIFw=w99-h99-p-rp-mo-br100",
      time: "1 month ago"
    },
    {
      id: 5,
      name: "Giri Saru",
      role: "Customer",
      text: "Really wonderful location and relax moment, Instant food service. The quality and taste are very good. A wonderful place for everyone to go and have fun, whether it's friends, family, or love.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWII8tP96c1aLkOcgKPjuZNJvDUps2VMp06BMOOMXUQaXqqj5ll=w99-h99-p-rp-mo-br100",
      time: "3 months ago"
    },
    {
      id: 6,
      name: "Vishal Dharun",
      role: "Customer",
      text: "Rooftop experience was good, well experience and customer service. Must explore their rooftop in night time. Worth for rate of cost......:)",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocKHlbiYIHJMfOCNsEG2ArThUh6bJDDy32ddFt59eiNFRwjGsQ=w99-h99-p-rp-mo-br100",
      time: "3 months ago"
    },
    {
      id: 7,
      name: "Guru moorthy pln",
      role: "Customer",
      text: "Service providing was soo good.. Good atmosphere.. Peace full place.. Try atleast one time..",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXvv1V9M1zcgUJwV6zMeGZFNjkXNAI7dWgfseQZGHl8YtVYPTMl=w99-h99-p-rp-mo-br100",
      time: "2 months ago"
    },
    {
      id: 8,
      name: "Abinaya",
      role: "Customer",
      text: "Love the atmosphere and foods. Nice place to visit with friends and families.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocKjq95Hvj1ikuaI5fFI6ZS64W2oPZGhNSL9qKProrFixU5xAA=w99-h99-p-rp-mo-br100",
      time: "1 month ago"
    },
    {
      id: 9,
      name: "Madhavan K",
      role: "Customer",
      text: "Must visit spot guyss ambiance food items ellam super ana idhukaga pola naalu dheena anna kaga poonga best price la panni kuduparu bday parties la ❣️👍",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUgpzv6ybpflD5UMn-4lYkq-QHgj0pjZhtmq6ZbNsK5jLXU97jG=w99-h99-p-rp-mo-br100",
      time: "1 month ago"
    },
    {
      id: 10,
      name: "Vicky Dhasin",
      role: "Customer",
      text: "Beauty full shop, couple try it, very carring.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocL5jcy_cqndzNeUMVW9Tej5v2yvOIyyihZz-HeLQHmNAdiB0g=w99-h99-p-rp-mo-br100",
      time: "2 months ago"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only start autoplay on mobile
    if (isMobile) {
      startAutoplay();
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      stopAutoplay();
    };
  }, [isMobile]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      if (!isTransitioning.current) {
        scrollTestimonials('right');
      }
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const scrollTestimonials = (direction) => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    
    const newIndex = direction === 'left'
      ? (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)
      : (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
    
    setActiveIndex(newIndex);
    
    // Reset transitioning flag after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveIndex(index);
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  const handleTouchStart = (e) => {
    if (isMobile) {
      stopAutoplay();
      touchStartRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      touchMoveRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      const touchDiff = touchStartRef.current - touchMoveRef.current;
      
      // If the swipe was significant enough
      if (Math.abs(touchDiff) > 50) {
        if (touchDiff > 0) {
          // Swipe left, go right
          scrollTestimonials('right');
        } else {
          // Swipe right, go left
          scrollTestimonials('left');
        }
      }
      
      startAutoplay();
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        />
      );
    }
    return stars;
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <p className={styles.sectionSubtitle}>Hear from the people who've experienced our<br/> delicious treats</p>
      </div>
      
      {isMobile ? (
        // Mobile view with slider
        <div className={styles.sliderContainer}>
          <div 
            className={styles.testimonialsSlider}
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={styles.testimonialsTrack} 
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`testimonial-${testimonial.id}-${index}`}
                  className={`${styles.testimonialCard} ${styles.mobileCard}`}
                  ref={index === 0 ? cardRef : null}
                >
                  <div className={styles.quoteIcon}>
                    <FaQuoteLeft />
                  </div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.ratingContainer}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className={styles.authorImage}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/55?text=User';
                      }}
                    />
                    <div>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <div className={styles.authorMeta}>
                        <p className={styles.authorRole}>{testimonial.role}</p>
                        <p className={styles.reviewTime}>{testimonial.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <button 
                key={`dot-${index}`}
                className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
                onClick={() => !isTransitioning.current && goToSlide(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop view with grid layout
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={`testimonial-${testimonial.id}-${index}`}
              className={styles.testimonialCard}
            >
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.ratingContainer}>
                {renderStars(testimonial.rating)}
              </div>
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className={styles.authorImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/55?text=User';
                  }}
                />
                <div>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <div className={styles.authorMeta}>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                    <p className={styles.reviewTime}>{testimonial.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;