import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/TestimonialsSlider.module.css';

const TestimonialsSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Use refs for values that shouldn't trigger re-renders
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const touchStartRef = useRef(0);
  const isTransitioning = useRef(false);
  
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

  // Keep dragOffsetRef updated with dragOffset
  useEffect(() => {
    dragOffsetRef.current = dragOffset;
  }, [dragOffset]);

  // Calculate the active index based on drag offset
  useEffect(() => {
    if (cardRef.current && !isTransitioning.current) {
      const cardWidth = cardRef.current.offsetWidth + 40;
      const rawIndex = Math.abs(Math.round(dragOffset / cardWidth)) % testimonials.length;
      setActiveIndex(rawIndex);
    }
  }, [dragOffset, testimonials.length]);

  // Disable auto-scroll - we'll use manual navigation instead
  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Add this useEffect to your component to handle resize events
  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current && sliderRef.current) {
        // Re-calculate the position on resize to keep active card visible
        const marginSize = window.innerWidth <= 768 ? 20 : 40;
        const cardWidth = cardRef.current.offsetWidth + marginSize;
        const targetOffset = -activeIndex * cardWidth;
        
        // Apply the new position without animation
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
        dragOffsetRef.current = targetOffset;
        setDragOffset(targetOffset);
        
        // Re-enable transition after position update
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.3s ease';
          }
        }, 50);
      }
    };
    
    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex]);

  // Handle mouse events for dragging
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartX(e.clientX);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const diff = e.clientX - dragStartX;
    const newOffset = Math.round(dragOffsetRef.current + diff);
    dragOffsetRef.current = newOffset;
    sliderRef.current.style.transform = `translateX(${newOffset}px)`;
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging && sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
      setIsDragging(false);
      
      // Snap to the nearest card
      if (cardRef.current) {
        snapToCard();
      }
    }
  };

  // Replace the touch handling functions with these improved versions
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = touch.clientX;
    setAutoplayPaused(true);
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
    }
    
    // Store the initial position to calculate movement
    dragOffsetRef.current = dragOffset;
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    
    // Prevent default to avoid page scrolling while swiping the slider
    e.preventDefault();
    
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const diff = currentX - touchStartRef.current;
    
    // Use a more responsive factor for touch movement (1 instead of 2)
    const newOffset = Math.round(dragOffsetRef.current + diff);
    
    // Apply the new position
    sliderRef.current.style.transform = `translateX(${newOffset}px)`;
    
    // Update refs but not state (for performance)
    dragOffsetRef.current = newOffset;
  };

  const handleTouchEnd = (e) => {
    if (!sliderRef.current || !cardRef.current) return;
    
    // Re-enable transitions
    sliderRef.current.style.transition = 'transform 0.3s ease';
    setAutoplayPaused(false);
    
    // Calculate the proper card to snap to based on velocity
    const cardWidth = cardRef.current.offsetWidth + (window.innerWidth <= 768 ? 20 : 40);
    const currentPos = dragOffsetRef.current;
    
    // Calculate the nearest card index
    const nearestCardIndex = Math.round(Math.abs(currentPos) / cardWidth);
    
    // Set the final position
    const finalOffset = -nearestCardIndex * cardWidth;
    
    // Apply the snap with transition
    sliderRef.current.style.transform = `translateX(${finalOffset}px)`;
    dragOffsetRef.current = finalOffset;
    setDragOffset(finalOffset);
  };

  // Function to snap to the nearest card after dragging
  const snapToCard = () => {
    if (!cardRef.current || !sliderRef.current) return;
    
    // Adjust margin size based on screen width
    const marginSize = window.innerWidth <= 768 ? 20 : 40;
    const cardWidth = cardRef.current.offsetWidth + marginSize;
    const currentOffset = dragOffsetRef.current;
    
    // Calculate the nearest card index
    const nearestCardIndex = Math.round(Math.abs(currentOffset) / cardWidth);
    
    // Calculate the target offset
    const targetOffset = -nearestCardIndex * cardWidth;
    
    // Apply the snap
    dragOffsetRef.current = targetOffset;
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    setDragOffset(targetOffset);
  };

  // Function to handle dot navigation
  const goToSlide = (index) => {
    if (!cardRef.current || !sliderRef.current || isTransitioning.current) return;
    
    isTransitioning.current = true;
    
    const cardWidth = cardRef.current.offsetWidth + 40;
    const targetOffset = -index * cardWidth;
    
    sliderRef.current.style.transition = 'transform 0.3s ease';
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    
    dragOffsetRef.current = targetOffset;
    setDragOffset(targetOffset);
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  // Also update the scrollTestimonials function to handle mobile sizing
  const scrollTestimonials = (direction) => {
    if (!sliderRef.current || !cardRef.current || isTransitioning.current) return;
    
    isTransitioning.current = true;
    
    // Adjust margin size based on screen width
    const marginSize = window.innerWidth <= 768 ? 20 : 40;
    const cardWidth = cardRef.current.offsetWidth + marginSize;
    const totalItems = testimonials.length;
    
    let nextIndex;
    if (direction === 'right') {
      // Move to next testimonial
      nextIndex = (activeIndex + 1) % totalItems;
    } else {
      // Move to previous testimonial
      nextIndex = (activeIndex - 1 + totalItems) % totalItems;
    }
    
    // Calculate the target offset
    const targetOffset = -nextIndex * cardWidth;
    
    // Apply smooth transition
    sliderRef.current.style.transition = 'transform 0.3s ease';
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    
    // Update state
    dragOffsetRef.current = targetOffset;
    setDragOffset(targetOffset);
    
    // Allow transitions again after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className={styles.star} />);
    }
    return stars;
  };

  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.subtitle}>Delighting customers with every scoop and celebration</div>
      
      <div className={styles.controlsWrapper}>
        <button 
          className={styles.navButton} 
          onClick={() => scrollTestimonials('left')}
          aria-label="Previous testimonial"
          disabled={isTransitioning.current}
        >
          <FaChevronLeft />
        </button>
        
        <div className={styles.testimonialsWrapper}>
          <div 
            className={styles.testimonialSlider}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isTransitioning.current ? 'transform 0.3s ease' : 'none',
              transform: `translateX(${dragOffset}px)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${testimonial.id}-${index}`}
                className={styles.testimonialCard}
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
        
        <button 
          className={styles.navButton} 
          onClick={() => scrollTestimonials('right')}
          aria-label="Next testimonial"
          disabled={isTransitioning.current}
        >
          <FaChevronRight />
        </button>
      </div>
      
      <div className={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <button 
            key={`dot-${index}`}
            className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`View testimonial ${index + 1}`}
            disabled={isTransitioning.current}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;