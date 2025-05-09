import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/TestimonialsSlider.module.css';

const TestimonialsSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use refs for values that shouldn't trigger re-renders
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const animationRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const touchStartRef = useRef(0);
  const isTransitioning = useRef(false);
  const autoplayTimerRef = useRef(null);
  
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
      const marginSize = isMobile ? 20 : 40;
      const cardWidth = cardRef.current.offsetWidth + marginSize;
      
      // Handle the case where offset might be positive (for looping)
      let normalizedOffset = dragOffset;
      
      // Calculate the total width of all slides
      const totalWidth = cardWidth * testimonials.length;
      
      // If the offset is positive, adjust it to be negative and at the appropriate looping position
      if (normalizedOffset > 0) {
        normalizedOffset = normalizedOffset - totalWidth;
      }
      
      // Get absolute index (might be larger than array length)
      const absoluteIndex = Math.abs(Math.round(normalizedOffset / cardWidth));
      
      // Use modulo to get the actual array index
      const rawIndex = absoluteIndex % testimonials.length;
      
      setActiveIndex(rawIndex);
    }
  }, [dragOffset, testimonials.length, isMobile]);

  // Setup autoplay for both mobile and desktop
  useEffect(() => {
    // Function to check if the viewport is mobile size
    const checkIfMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth <= mobileWidth);
    };
    
    // Check initially
    checkIfMobile();
    
    // Setup autoplay on both mobile and desktop
    const startAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      
      // Set autoplay interval (2 seconds for desktop, 3 seconds for mobile)
      const autoplayInterval = isMobile ? 3000 : 2000;
      
      autoplayTimerRef.current = setInterval(() => {
        if (!isDragging && !autoplayPaused && !isTransitioning.current) {
          scrollTestimonials('right');
        }
      }, autoplayInterval);
    };
    
    // Start autoplay
    startAutoplay();
    
    // Setup resize listener
    const handleResize = () => {
      checkIfMobile();
      
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
      
      // Restart autoplay with new settings
      startAutoplay();
    };
    
    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear autoplay when page is not visible
        clearInterval(autoplayTimerRef.current);
      } else {
        // Restart autoplay when page becomes visible again
        startAutoplay();
      }
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Clean up
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeIndex, isMobile, isDragging, autoplayPaused]);

  // Add this effect to your component
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // Manual event handlers that can specify options
    const touchStartHandler = (e) => {
      handleTouchStart(e);
    };
    
    const touchMoveHandler = (e) => {
      // Handle touch move without preventDefault
      if (!sliderRef.current || !cardRef.current) return;
      
      const touch = e.touches[0];
      const currentX = touch.clientX;
      const diff = currentX - touchStartRef.current;
      
      const cardWidth = cardRef.current.offsetWidth + 20; // mobile margin
      const maxMove = cardWidth;
      
      let limitedDiff;
      if (isMobile) {
        limitedDiff = Math.sign(diff) * Math.min(Math.abs(diff) * 0.8, maxMove);
      } else {
        const dampingFactor = 0.3;
        limitedDiff = Math.sign(diff) * Math.min(Math.abs(diff) * dampingFactor, cardWidth / 2);
      }
      
      const newOffset = dragOffsetRef.current + limitedDiff;
      sliderRef.current.style.transform = `translateX(${newOffset}px)`;
      dragOffsetRef.current = newOffset;
    };
    
    const touchEndHandler = (e) => {
      handleTouchEnd(e);
    };
    
    // Add event listeners with passive option explicitly set
    slider.addEventListener('touchstart', touchStartHandler, { passive: true });
    slider.addEventListener('touchmove', touchMoveHandler, { passive: true });
    slider.addEventListener('touchend', touchEndHandler, { passive: true });
    
    // Clean up
    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', touchStartHandler);
        slider.removeEventListener('touchmove', touchMoveHandler);
        slider.removeEventListener('touchend', touchEndHandler);
      }
    };
  }, [isMobile]); // Re-add listeners if mobile state changes

  // Pause autoplay on hover for desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setAutoplayPaused(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setAutoplayPaused(false);
    }
  };

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

  // Touch handling functions with improved mobile support
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
    if (!sliderRef.current || !cardRef.current) return;
    
    // Only get the horizontal movement
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const diff = currentX - touchStartRef.current;
    
    // More direct response for mobile - reduce damping for better feel
    const cardWidth = cardRef.current.offsetWidth + 20; // mobile margin
    
    // Calculate maximum allowed movement (one card width)
    const maxMove = cardWidth;
    
    // Apply movement with less resistance for mobile
    let limitedDiff;
    if (isMobile) {
      // More direct response for mobile
      limitedDiff = Math.sign(diff) * Math.min(Math.abs(diff) * 0.8, maxMove);
    } else {
      // Original damping for desktop
      const dampingFactor = 0.3;
      limitedDiff = Math.sign(diff) * Math.min(Math.abs(diff) * dampingFactor, cardWidth / 2);
    }
    
    // Apply the position with appropriate resistance
    const newOffset = dragOffsetRef.current + limitedDiff;
    
    // Apply the new position
    sliderRef.current.style.transform = `translateX(${newOffset}px)`;
    dragOffsetRef.current = newOffset;
  };

  const handleTouchEnd = () => {
    if (!sliderRef.current || !cardRef.current) return;
    
    // Re-enable transitions
    sliderRef.current.style.transition = 'transform 0.3s ease';
    
    // Resume autoplay after a delay
    setTimeout(() => {
      setAutoplayPaused(false);
    }, 1000);
    
    // Calculate movement to determine direction
    const marginSize = isMobile ? 20 : 40;
    const cardWidth = cardRef.current.offsetWidth + marginSize;
    
    // Calculate current position relative to active index
    const currentPosition = activeIndex * cardWidth;
    const currentOffset = Math.abs(dragOffsetRef.current);
    const diffFromPosition = Math.abs(currentOffset - currentPosition);
    
    // Determine which direction to move based on swipe
    let targetIndex = activeIndex;
    const moveThreshold = isMobile ? 0.1 * cardWidth : 0.15 * cardWidth;
    
    if (diffFromPosition > moveThreshold) {
      if (dragOffsetRef.current > -currentPosition) {
        // Moving right (prev)
        targetIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
      } else {
        // Moving left (next)
        targetIndex = (activeIndex + 1) % testimonials.length;
      }
    }
    
    // Calculate the final target offset
    const targetOffset = -targetIndex * cardWidth;
    
    // Apply the snap with transition
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    dragOffsetRef.current = targetOffset;
    setDragOffset(targetOffset);
    
    // Ensure card is properly centered after sliding (especially for mobile)
    if (isMobile) {
      setTimeout(() => {
        if (sliderRef.current) {
          // Reconfirm the position is exactly at the target offset
          sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
        }
      }, 310); // Just after the transition completes
    }
  };

  // Function to snap to the nearest card after dragging
  const snapToCard = () => {
    if (!cardRef.current || !sliderRef.current) return;
    
    // Adjust margin size based on screen width
    const marginSize = isMobile ? 20 : 40;
    const cardWidth = cardRef.current.offsetWidth + marginSize;
    const currentOffset = dragOffsetRef.current;
    
    // Calculate the nearest card index
    const nearestCardIndex = Math.round(Math.abs(currentOffset) / cardWidth);
    
    // Handle looping at the edges
    let targetIndex = nearestCardIndex % testimonials.length;
    
    // Calculate the target offset based on the index
    const targetOffset = -(targetIndex * cardWidth);
    
    // Apply the snap
    dragOffsetRef.current = targetOffset;
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    setDragOffset(targetOffset);
    
    // Ensure proper centering for mobile
    if (isMobile) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
        }
      }, 310); // Just after transition completes
    }
  };

  // Function to handle dot navigation
  const goToSlide = (index) => {
    if (!cardRef.current || !sliderRef.current || isTransitioning.current) return;
    
    isTransitioning.current = true;
    
    const marginSize = isMobile ? 20 : 40;
    const cardWidth = cardRef.current.offsetWidth + marginSize;
    const targetOffset = -index * cardWidth;
    
    sliderRef.current.style.transition = 'transform 0.3s ease';
    sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
    
    dragOffsetRef.current = targetOffset;
    setDragOffset(targetOffset);
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 300);
  };

  // Function to scroll testimonials - improved for better mobile handling
  const scrollTestimonials = (direction) => {
    if (!sliderRef.current || !cardRef.current || isTransitioning.current) return;
    
    // Set transitioning flag to prevent multiple clicks
    isTransitioning.current = true;
    
    // Adjust margin size based on screen width
    const marginSize = isMobile ? 20 : 40;
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
    
    // Update state and refs
    dragOffsetRef.current = targetOffset;
    setDragOffset(targetOffset);
    
    // Allow transitions again after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
      
      // Ensure proper centering for mobile
      if (isMobile) {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${targetOffset}px)`;
        }
      }
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
        {/* Show navigation buttons only on non-mobile devices */}
        {!isMobile && (
          <button 
            className={styles.navButton} 
            onClick={() => !isTransitioning.current && scrollTestimonials('left')}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
        )}
        
        <div 
          className={styles.testimonialsWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`${styles.testimonialSlider} ${isMobile ? styles.mobileSlider : ''}`}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isTransitioning.current ? 'transform 0.3s ease' : 'none',
              transform: `translateX(${dragOffset}px)`,
              touchAction: 'pan-y', // Add this for better touch handling
            }}
          >
            {/* Main testimonials - on mobile, we don't need the extra duplicates */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${testimonial.id}-${index}`}
                className={`${styles.testimonialCard} ${isMobile ? styles.mobileCard : ''}`}
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
        
        {/* Show navigation buttons only on non-mobile devices */}
        {!isMobile && (
          <button 
            className={styles.navButton} 
            onClick={() => !isTransitioning.current && scrollTestimonials('right')}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        )}
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
  );
};

export default TestimonialsSlider;